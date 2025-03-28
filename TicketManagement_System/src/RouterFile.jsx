import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./Signup";
import Login from "./Login";
import NewTicket from "./TicketForm";
import UserTable from "./UserTable";
import TicketList from "./TicketList";
import Home from "./Home";
import TicketService from './services/ticketServices';

const RouterFile = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    return (
        
            <Routes>
                <Router path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/TicketList" element={<TicketList onEdit={setSelectedTicket} />} />
                <Route path="/UserTable" element={<UserTable />} />  
                <Route path="/addTicket" element={<NewTicket selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />} />
                </Routes>
                );
            };

export default RouterFile;
