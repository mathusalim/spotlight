import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleTermChange = term => { setSearchTerm(term); console.log(term); };

    return (
        <input
            className='search-input'
            type='text'
            placeholder="Search..."
            value={searchTerm}
            onChange={e => handleTermChange(e.target.value)} />

    )
}

export default Search