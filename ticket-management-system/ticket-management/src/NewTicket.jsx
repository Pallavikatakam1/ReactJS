import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


// NewTicket component handles both adding and updating tickets
const NewTicket = ({ selectedTicket, setSelectedTicket }) => {
  const navigate = useNavigate();

  // Local state
  const [loggedInUser, setLoggedInUser] = useState(null); // Store the logged-in user
  const [allUsers, setAllUsers] = useState([]);           // Store all users for 'Assigned To'
  const [ticketPriority, setTicketPriority] = useState([]); // Store priority options
  const [ticketStatus, setTicketStatus] = useState([]);     // Store status options

  // Ticket form data
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

  // useEffect to initialize data on component mount or when selectedTicket changes
  useEffect(() => {
    // Load user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedInUser(user);
      setTicketData((prevData) => ({
        ...prevData,
        createdBy: user.id,
      }));
    }

    // If editing a ticket, prefill form
    if (selectedTicket) {
      setTicketData((prevData) => ({
        ...prevData,
        ...selectedTicket,
        assignedTo:
          selectedTicket.assignedTo?.id || selectedTicket.assignedTo || "",
        priority: selectedTicket.priority?.id || selectedTicket.priority || "",
        status: selectedTicket.status?.id || selectedTicket.status || "",
      }));
    }

    // Fetch ticket priorities from API
    axios.get("http://localhost:8080/ticketPriority").then((response) => {
      const priorities = response.data.map((priority) => ({
        id: priority.id,
        description: priority.description,
      }));
      setTicketPriority(priorities);
    });

    // Fetch ticket statuses from API
    axios.get("http://localhost:8080/ticketStatus").then((response) => {
      const statuses = response.data.map((status) => ({
        id: status.id,
        description: status.description,
      }));
      setTicketStatus(statuses);
    });

    // Fetch all users for the assignment dropdown
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [selectedTicket]);

  // Handle input changes and update state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]:
        name === "priority" ||
        name === "status" ||
        name === "createdBy" ||
        name === "assignedTo"
          ? parseInt(value) // Convert to integer for backend
          : value,
    }));
  };

  // Submit form handler (create or update ticket)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const ticketDetails = {
      title: ticketData.title,
      description: ticketData.description,
      priority: ticketData.priority,
      status: ticketData.status,
      createdBy: loggedInUser.id,
      assignedTo: ticketData.assignedTo,
      ticketComment: ticketData.ticketComment,
    };

    try {
      if (ticketData.id) {
        // Update existing ticket
        await axios.put(
          `http://localhost:8080/tickets/update/${ticketData.id}`,
          ticketDetails
        );
        alert("Ticket updated successfully");
      } else {
        // Add new ticket
        await axios.post("http://localhost:8080/tickets/add", ticketDetails);
        alert("Ticket added successfully");
      }
      navigate("/ticketTable");
    } catch (error) {
      console.error("Error:", error);
      alert("Ticket operation failed");
    }
  };

  // Logout handler (redirect to login)
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div id="container">
        <div className="form-container">
          {/* Logout button */}
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>

          <h2>Ticket Form</h2>

          {/* Ticket Form */}
          <Form onSubmit={handleSubmit}>
            {/* Title Field */}
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={ticketData.title}
              onChange={handleChange}
              required
            />

            {/* Description Field */}
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={ticketData.description}
              onChange={handleChange}
              required
            />

            {/* Priority Dropdown */}
            <Form.Label htmlFor="priority">Priority</Form.Label>
            <Form.Select
              name="priority"
              value={ticketData.priority || ""}
              onChange={handleChange}
              required
            >
              <option value="">None</option>
              {ticketPriority.map((priority) => (
                <option key={priority.id} value={priority.id}>
                  {priority.description}
                </option>
              ))}
            </Form.Select>

            {/* Status Dropdown */}
            <Form.Label htmlFor="status">Status</Form.Label>
            <Form.Select
              name="status"
              value={ticketData.status || ""}
              onChange={handleChange}
              required
            >
              <option value="">None</option>
              {ticketStatus.map((status) => (
                <option key={status.id} value={status.id}>
                  {status.description}
                </option>
              ))}
            </Form.Select>

            {/* Created By Field (read-only) */}
            <Form.Label>Created By</Form.Label>
            <Form.Control
              type="text"
              value={loggedInUser?.name || "Loading..."}
              readOnly
            />

            {/* Assigned To Dropdown */}
            <Form.Label htmlFor="assigned">Assigned To</Form.Label>
            <Form.Select
              name="assignedTo"
              value={ticketData.assignedTo || ""}
              onChange={handleChange}
              required
            >
              <option value="">None</option>
              {allUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Form.Select>

            {/* Comment Field */}
            <Form.Label htmlFor="ticketComment">Ticket Comment</Form.Label>
            <Form.Control
              type="text"
              name="ticketComment"
              value={ticketData.ticketComment}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
