// src/DataEntry.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataEntry = ({ data, setData, editEntry }) => {
    const [id, setId] = useState(null);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (editEntry) {
            setId(editEntry.id);
            setDate(editEntry.date);
            setCategory(editEntry.category);
            setAmount(editEntry.amount);
            setPayment(editEntry.payment);
            setDescription(editEntry.description);
        }
    }, [editEntry]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id != null) {
            const updatedData = data.map((entry) => {
                if (entry.id === id) {
                    return { id, date, category, amount, payment, description };
                }
                return entry;
            });
            setData(updatedData);
            localStorage.removeItem('editEntry');
        } else {
            let newId = 1;
            if (data.length > 0) {
                const lastItem = data[data.length - 1];
                newId = lastItem.id + 1;
            }
            const newEntry = { id: newId, date, category, amount, payment, description };
            const updatedData = [...data, newEntry];
            setData(updatedData);
        }
        navigate('/'); // Navigate back to the home page (table)
    };

    const handleGoBack = () => {
        navigate('/'); // Go back to the home page
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="dates">Date: </label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <br />
            <label htmlFor="category">Category: </label>
            <select
                name="categories"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="">None</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="bills">Bills</option>
            </select>
            <br />
            <label htmlFor="amount">Amount: </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <br />
            <label htmlFor="payments">Payment Method: </label>
            <select
                name="payments"
                id="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
            >
                <option value="">None</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">UPI</option>
            </select>
            <br />
            <label htmlFor="descriptions">Description: </label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <button type="submit">Submit</button>

            {/* Go Back to Home Button */}
            <button type="button" className="go-back-button" onClick={handleGoBack}>
                Go Back to Home
            </button>
        </form>
    );
};

export default DataEntry;
