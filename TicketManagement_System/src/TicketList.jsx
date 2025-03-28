import React, { useEffect, useState } from 'react';
import TicketService from './services/ticketServices';
import { Link } from 'react-router-dom';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    TicketService.getAll().then(response => {
      setTickets(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
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
          <th>Comment</th>
          <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
               <td>{ticket.id}</td>
               <td>{ticket.title}</td>
               <td>{ticket.description}</td>
               <td>{ticket.priority?.description || "N/A"}</td>
               <td>{ticket.status?.description || "N/A"}</td>
               <td>{ticket.createdBy?.name || "N/A"}</td>
               <td>{ticket.assignedTo?.name || "N/A"}</td>
               <td>{ticket.ticketComment || "N/A"}</td>
               <td>{formatDate(ticket.createdDate)}</td>
              <td>
                <button to={`/tickets/${ticket.id}`}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
