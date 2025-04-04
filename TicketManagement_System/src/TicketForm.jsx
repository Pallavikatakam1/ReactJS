import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TicketService from './services/ticketServices';


const TicketForm = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      TicketService.get(id).then(response => {
        setTicket(response.data);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      TicketService.update(id, ticket).then(() => navigate('/tickets'));
    } else {
      TicketService.create(ticket).then(() => navigate('/tickets'));
    }
  };

  return (
    <div className='container'>
      <h2>{id ? 'Edit Ticket' : 'Add Ticket'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={ticket.title}
            onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={ticket.description}
            onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
          />
        </div>
        <button type="submit">Add Ticket</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TicketForm;
