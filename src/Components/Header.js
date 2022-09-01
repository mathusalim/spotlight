import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <h1 className='page-title'>Spotlight</h1>
                <SearchInput search={(term) => console.log(term)} />
            </div>
        </div>
    )
}

export default Header