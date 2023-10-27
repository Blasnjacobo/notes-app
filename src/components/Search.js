import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = (props) => {
  const { handleSearchNote } = props
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em' />
      <input
        type='text'
        placeholder='Type to search...'
        onClick={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  )
}

export default Search
