import { useState } from "react";

const Sorting = ({ data, setFilteredData }) => {
    const [sorted, setSorted] = useState('');

    const handleSort = (e) => {
        const value = e.target.value;
        setSorted(value);
        const sortedData = [...data].sort((a, b) => b.amount - a.amount);

        if (value === 'amount') {
            setFilteredData(sortedData);
        } else {
            setFilteredData(data);
        }
    };

    return (
        <>
            <form>
                <label htmlFor="sortings">Sort By : </label>
                <select name="sort" id="sort" value={sorted} onChange={handleSort}>
                    <option value="">None</option>
                    <option value="amount">Amount(High-Low)</option>
                </select>
            </form>
        </>
    );
};

export default Sorting;
