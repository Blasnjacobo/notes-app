import React from 'react'

const Header = (props) => {
  const { handleToggleDarkMode } = props
  return (
    <div className='header'>
      <h1>Notes Blas</h1>
      <button className='toggle' onClick={() => handleToggleDarkMode(prevMode => !prevMode)}>Toggle Mode</button>
    </div>
  )
}

export default Header
