import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Signup';
import NewTicket from './NewTicket';
import UserTable from './UserTable';
import TicketTable from './TicketList';
import { useState } from 'react';
import Login from './Login';

const RouterFile = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Example authentication state

    // Check for authenticated user before allowing access to protected routes
    const ProtectedRoute = ({ element }) => {
        if (isAuthenticated) {
            return element;
        } else {
            return <Login />;
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/addTicket" element={<NewTicket selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />} />
                {/* Protected Route example */}
                <Route path="/userTable" element={<ProtectedRoute element={<UserTable />} />} />
                <Route path="/ticketTable" element={<ProtectedRoute element={<TicketTable onEdit={setSelectedTicket} />} />} />
            </Routes>
        </Router>
    );
};

export default RouterFile;
