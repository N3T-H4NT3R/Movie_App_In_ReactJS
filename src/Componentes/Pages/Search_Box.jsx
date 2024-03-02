import React from 'react'

function Search_Box(props) {
  return (
    <div className='col lol-sm-3 form-search'>
      <input
        className='form-control' 
        type="search" 
        placeholder='Search ...'
        value={props.value}
        onInput={(e) => props.setSearch(e.target.value)}
        />
    </div>
  )
}

export default Search_Box
