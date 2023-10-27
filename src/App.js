/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './components/NoteList'
import Search from './components/Search'
import Header from './components/Header'

function App () {
  // Since we are going to actively change this data we are using state
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '5/11/1997'
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '3/03/1997'
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '14/12/1998'
    }
  ])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    console.log(text)
    const newNote = {
      id: nanoid(),
      // eslint-disable-next-line object-shorthand
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id)
    setNotes(newNotes)
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
