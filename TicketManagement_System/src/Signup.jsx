import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        console.log("User Signed Up");
        navigate("/tickets");  // Redirect to tickets page
    };

    return (
        <div>
            <h2>Signup</h2>
            {/* <form onSubmit={handleSignup}> */}
            <div className="form-group">
              <label>Name</label>
            <input
               type="text"
               className="form-control"
               value={name}
               onChange={(e)=> setName(e.target.value)}
               required
            />
            </div>
            <div className="form-group">
              <label>Email</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            </div>
            <div className="form-group">
              <label>Password</label>
            <input 
                type="password"  
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            </div>
            <div className="form-group">
              <label>Department</label>
            <input
               type="text"
               className="form-control"
               value={department}
               onChange={(e)=> setDepartment(e.target.value)}
               required
            />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
            <input
               type="text"
               className="form-control"
               value={phoneNumber}
               onChange={(e)=> setPhoneNumber(e.target.value)}
               required
            />
            </div>
            <div className="form-group">
              <label>Description</label>
            <input
               type="text"
               className="form-control"
               value={description}
               onChange={(e)=> setDescription(e.target.value)}
            />
            </div>
            <button onClick={handleSignup}>Signup</button>
        </div>
        
        // ()</form>
    );
};

export default Signup;
