import React from "react";
import { useState } from "react";

const Search = ({ data, setFilteredData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filteredData = data.filter(
            (entry) =>
                entry.category.toLowerCase().includes(value.toLowerCase()) ||
                entry.payment.toLowerCase().includes(value.toLowerCase()) ||
                entry.date.includes(value) ||
                entry.amount.includes(value)
        );
        setFilteredData(filteredData);
    };

    return (
        <div id="searches">
            Search :
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
