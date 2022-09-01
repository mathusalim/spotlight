import React, { useEffect, useState } from 'react'
import { useDebounceTime } from '../hooks/useDebounceTime';

// eslint-disable-next-line react/prop-types
const SearchInput = ({ search }) => {
    const { UpdateDebounedDistinct } = useDebounceTime(300, search);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        UpdateDebounedDistinct(searchTerm)
    }, [searchTerm])


    const handleTermChange = term => { setSearchTerm(term) };

    return (
        <input
            className='search-input'
            type='text'
            placeholder="Search..."
            value={searchTerm}
            onChange={e => handleTermChange(e.target.value)} />

    )
}

export default SearchInput