import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const TicketTable = ({ onEdit }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser) {
      navigate("/login");
      return;
    }

    setUser(loggedInUser);

    axios
      .get(`http://localhost:8080/tickets/${loggedInUser.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [navigate]);

  // Check if user is admin based on role === 0 or userName === "admin"
  const isAdmin = user?.userName === "admin" || user?.role === 0;

  // Filter deleted tickets for non-admins
  const filteredData = isAdmin
    ? data
    : data.filter((ticket) => !ticket.isDeleted);

  // Handle ticket edit
  const handleEdit = (ticket) => {
    onEdit(ticket);
    navigate("/addTicket");
  };

  // Handle new ticket navigation
  const handleNewTicket = () => {
    navigate("/addTicket");
  };

  // Navigate to user table
  const handleUsers = () => {
    navigate("/userTable");
  };

  // Open delete modal
  const handleDelete = (ticket) => {
    setTicketToDelete(ticket);
    setShowDeleteModal(true);
  };

  // Logout and redirect to login
  const handleLogout = () => {
    navigate("/");
  };

  // Confirm deletion (soft delete)
  const confirmDelete = () => {
    const ticketDTO = {
      id: ticketToDelete.id,
      isDeleted: true,
      deleteDate: new Date().toISOString(),
      priority: ticketToDelete.priority?.id,
      status: ticketToDelete.status?.id,
      createdBy: ticketToDelete.createdBy?.id,
      assignedTo: ticketToDelete.assignedTo?.id,
      ticketComment: ticketToDelete.ticketComment,
    };

    axios
      .put(
        `http://localhost:8080/tickets/delete/${ticketToDelete.id}`,
        ticketDTO
      )
      .then((response) => {
        alert("Ticket deleted successfully");
        setData((prevData) =>
          prevData.filter((t) => t.id !== ticketToDelete.id)
        );
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error("Error deleting ticket:", error);
        alert("Failed to delete the ticket");
        setShowDeleteModal(false);
      });
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setTicketToDelete(null);
  };

  return (
    <>
      <div className="ticket-container">
        <Button variant="primary" onClick={handleNewTicket} className="ticket-new-button">
          Add New Ticket
        </Button>

        {isAdmin && (
          <Button variant="info" onClick={handleUsers} className="ticket-users-button">
            Users Data
          </Button>
        )}

        <Button variant="secondary" onClick={handleLogout} className="ticket-logout-button">
          Logout
        </Button>

        <div className="ticket-table-container">
          {data.length === 0 ? (
            <p>Loading tickets...</p>
          ) : (
            <Table striped bordered hover className="ticket-table">
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
                  {isAdmin && (
                    <>
                      <th>Delete Date</th>
                      <th>Deleted</th>
                    </>
                  )}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.priority?.description}</td>
                    <td>{item.status?.description}</td>
                    <td>{item.createdBy?.name}</td>
                    <td>{item.assignedTo?.name}</td>
                    <td>{item.ticketComment}</td>
                    <td>{new Date(item.createdDate).toLocaleString()}</td>
                    <td>{new Date(item.modifiedDate).toLocaleString()}</td>
                    {isAdmin && (
                      <>
                        <td>{item.deleteDate ? new Date(item.deleteDate).toLocaleString() : "—"}</td>
                        <td>{item.isDeleted ? "Yes" : "No"}</td>
                      </>
                    )}
                    <td>
                      <div className="action-buttons">
                        <Button
                          className="edit-button"
                          variant="outline-primary"
                          onClick={() => handleEdit(item)}
                          disabled={item.isDeleted}
                        >
                          Edit
                        </Button>
                        <Button
                          className="delete-button"
                          variant="outline-danger"
                          onClick={() => handleDelete(item)}
                          disabled={item.isDeleted}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>

        <Modal show={showDeleteModal} onHide={handleCloseModal} className="ticket-modal">
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this ticket?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} className="ticket-modal-close-button">
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete} className="ticket-modal-confirm-button">
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TicketTable;
