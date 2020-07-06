import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="searchInput">
            <input
                className='form-control'
                type='search'
                placeholder='Search'
                onChange={searchChange}
            />
        </div>
    )
}



export default SearchBox;