import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns"; // Importing date-fns for date formatting

const TicketList = ({ onEdit }) => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null); // Store the logged-in user
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        } else {
            navigate('/Login');
        }

        axios.get('http://localhost:8080/Ticket')
            .then((response) => {
                console.log('Data : ', response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data : ', error);
                alert("Error occurred while fetching tickets. Please try again.");
            });
    }, [navigate]);

    const handleEdit = (ticket) => {
        onEdit(ticket);
        navigate('/addTicket');
    };

    const handleNewTicket = () => {
        navigate('/addTicket');
    };

    const handleUsers = () => {
        navigate('/UserTable');
    };

    const handleDelete = (ticketId) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (!confirm) return;

        axios.delete(`http://localhost:8080/Ticket/delete/${ticketId}`)
            .then((response) => {
                setData((prevData) => prevData.filter((ticket) => ticket.id !== ticketId));
                alert("Ticket deleted successfully");
            })
            .catch((error) => {
                console.error("Error : ", error);
                alert("Error occurred while deleting the ticket. Please try again.");
            });
    };

    const isAdmin = user?.userName === 'admin' || user?.roles?.some(role => role.role === 'admin');

    // Function to format date in a user-friendly format
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A'; // Return 'N/A' if no date is provided
        return format(new Date(dateString), 'MM/dd/yyyy HH:mm');
    };

    return (
        <>
            {isAdmin && (
                <button onClick={handleUsers}>Users Data</button>
            )}
            <button onClick={handleNewTicket}>Add New Ticket</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Assigned To</th>
                        <th>Ticket Comment</th>
                        <th>Created Date</th>
                        <th>Modified Date</th>
                        <th>Deleted Date</th>
                        <th>Deleted</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.priority.description}</td>
                                <td>{item.status.description}</td>
                                <td>{item.createdBy.name}</td>
                                <td>{item.assignedTo.name}</td>
                                <td>{item.ticketComment}</td>
                                <td>{formatDate(item.createdDate)}</td>
                                {isAdmin && (
                                    <>
                                        <td>{formatDate(item.modifiedDate)}</td>
                                        <td>{formatDate(item.deleteDate)}</td>
                                        <td>{item.deleted ? "Yes" : "No"}</td>
                                    </>
                                )}
                                <td>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TicketList;
