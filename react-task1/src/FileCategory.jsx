import { useState } from "react";

const Filter = ({ data, setFilteredData }) => {
    const [filterTerm, setFilterTerm] = useState('');

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilterTerm(value);
        const filteredData = data.filter(
            (entry) => entry.category.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    return (
        <>
            <form>
                <label htmlFor="filters">Filter By : </label>
                <select name="filter" id="filter" value={filterTerm} onChange={handleFilter}>
                    <option value="">None</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="bills">Bills</option>
                </select>
            </form>
        </>
    );
};

export default Filter;
