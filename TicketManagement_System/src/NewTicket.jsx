import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewTicket = ({ selectedTicket, setSelectedTicket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState([]);
  const [ticketPriority, setTicketPriority] = useState([]);
  const [ticketStatus, setTicketStatus] = useState([]);
  const [ticketData, setTicketData] = useState({
    id: null,
    title: "",
    description: "",
    priority: "",
    status: "",
    createdBy: "",
    assignedTo: "",
    ticketComment: "",
  });
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedTicket) {
      setTicketData(selectedTicket);
    }

    // Fetch users, priorities, and statuses
    const fetchData = async () => {
      try {
        const [usersResponse, priorityResponse, statusResponse] = await Promise.all([
          axios.get("http://localhost:8080/users"),
          axios.get("http://localhost:8080/TicketPriority"),
          axios.get("http://localhost:8080/TicketStatus"),
        ]);

        setUserName(usersResponse.data.map((user) => ({ id: user.id, name: user.name })));
        setTicketPriority(priorityResponse.data.map((priority) => ({ id: priority.id, description: priority.description })));
        setTicketStatus(statusResponse.data.map((status) => ({ id: status.id, description: status.description })));

        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError("Error fetching data");
        setLoading(false); // Set loading to false on error
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    return () => {
      // Clean up function if necessary
    };
  }, [selectedTicket]);

  const handleChange = (event) => {
    setTicketData({
      ...ticketData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const ticketDetails = {
      title: ticketData.title,
      description: ticketData.description,
      priority: ticketData.priority,
      status: ticketData.status,
      createdBy: ticketData.createdBy,
      assignedTo: ticketData.assignedTo,
      ticketComment: ticketData.ticketComment,
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/Ticket/update/${ticketData.id}`,
        ticketDetails
      );
      alert("Ticket updated successfully");
      setSelectedTicket(null);
      navigate("/TicketList");
    } catch (error) {
      alert("Ticket update failed");
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ticketDetails = {
      title: ticketData.title,
      description: ticketData.description,
      priority: ticketData.priority,
      status: ticketData.status,
      createdBy: ticketData.createdBy,
      assignedTo: ticketData.assignedTo,
      ticketComment: ticketData.ticketComment,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/tickets/add",
        ticketDetails
      );
      alert("Ticket added successfully");
      navigate("/TicketList");
    } catch (error) {
      alert("Ticket adding failed");
      console.error("Error: ", error);
    }
  };

  // Handle form submission based on ticketData.id (edit or add)
  const handleFormSubmit = ticketData.id ? handleUpdate : handleSubmit;

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Ticket Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={ticketData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={ticketData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="priority">Priority: </label>
        <select name="priority" value={ticketData.priority} onChange={handleChange}>
          <option value="">None</option>
          {ticketPriority.map((priority) => (
            <option key={priority.id} value={priority.id}>
              {priority.description}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="status">Status: </label>
        <select name="status" value={ticketData.status} onChange={handleChange}>
          <option value="">None</option>
          {ticketStatus.map((status) => (
            <option key={status.id} value={status.id}>
              {status.description}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="createdBy">Created By: </label>
        <select
          name="createdBy"
          value={ticketData.createdBy}
          onChange={handleChange}
        >
          <option value="">None</option>
          {userName.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="assignedTo">Assigned To: </label>
        <select
          name="assignedTo"
          value={ticketData.assignedTo}
          onChange={handleChange}
        >
          <option value="">None</option>
          {userName.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="ticketComment">Ticket Comment: </label>
        <input
          type="text"
          name="ticketComment"
          value={ticketData.ticketComment}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default NewTicket;
