import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import NewTicket from './NewTicket';
import UserTable from './UserTable';
import TicketTable from './TicketTable';
import { useState } from 'react';

const RouterFile = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Home/>}></Route> */}
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/addTicket" element={<NewTicket selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />} />
                    <Route path="/userTable" element={<UserTable />} />
                    <Route path="/ticketTable" element={<TicketTable onEdit={setSelectedTicket}/>} />
                </Routes>
            </Router>
        </>
    );
};

export default RouterFile;
