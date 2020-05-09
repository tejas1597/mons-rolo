import React from 'react';

export const Search = ({ placeholder, handleSearch }) => (
    <div className="search">
        <input type="search" placeholder={placeholder}
            onChange={handleSearch} />
    </div>
)