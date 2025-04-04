import './App.css';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Filter from './FileCategory'; // Correct import path
import Sorting from './Sorting';
import { useEffect, useState } from 'react'; // Correct import for useState and useEffect

const Table = ({data, setData , setEditEntry}) => {
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    },[data]);

    const DataEntry = () => {
        setEditEntry(null);
        localStorage.removeItem('editEntry');
        navigate('/DataEntry'); // Corrected navigation path
    }

    const HandleEdit =(entry) => {
        setEditEntry(entry);
        localStorage.setItem('editEntry', JSON.stringify(entry));
        navigate('/DataEntry'); // Corrected navigation path
    }

    const DeleteEntry = (id) => {
        const updatedData = data.filter((entry) => entry.id !== id);
        setData(updatedData);
    }

    const TotalAmount = filteredData.reduce((acc, entry) => acc + Number(entry.amount), 0);

    return (
        <>
            <Search data={data} setFilteredData={setFilteredData} />
            <Filter data={data} setFilteredData={setFilteredData}/>
            <Sorting data={data} setFilteredData={setFilteredData} />
            <button id="total">Total Amount Spent: {TotalAmount}</button>
            <button id="addNew" onClick={DataEntry}>New Expenses</button>
              
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((entry) => (
                        <tr key={entry.id}>
                            <td className="ids">{entry.id}</td>
                            <td className="items">{entry.date}</td>
                            <td className="items">{entry.category}</td>
                            <td className="items">{entry.amount}</td>
                            <td className="items">{entry.payment}</td>
                            <td className="itemms">{entry.description}</td>
                            <td className="items">
                                <button onClick={() => HandleEdit(entry)}>Edit</button>
                                <button onClick={() => DeleteEntry(entry.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default Table;
