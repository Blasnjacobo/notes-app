/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const AddNote = (props) => {
  const { handleAddNote } = props
  console.log(handleAddNote)

  const [noteText, setNoteText] = useState('')
  const characterLimit = 200
  const handleChange = (event) => {
    const currentText = event.target.value
    if (characterLimit - currentText.length >= 0) {
      setNoteText(currentText)
    }
  }

  const handleSaveClick = () => {
    // trim method remove white space from the start and the end of a string
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className='note new'>
      <textarea
        rows='8'
        colums='10'
        placeholder='type to add a note...'
        value={noteText}
        onChange={handleChange}
      />
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
