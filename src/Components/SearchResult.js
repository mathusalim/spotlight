import React from 'react'

const SearchResult = () => {
    const items = [1, 2, 3, 4]
    return (
        <div className='search-result-container'>
            <div className='container'>
                {items.map(item => <div key={item} className="movieHolder">test</div>)}
            </div>
        </div>
    )
}

export default SearchResult