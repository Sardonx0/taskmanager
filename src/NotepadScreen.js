import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NotepadScreen = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    // Make API call to add note and update state
  };

  const deleteNote = (noteId) => {
    // Make API call to delete note and update state
  };

  return (
    <div>
      <h2>Notepad Screen</h2>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default NotepadScreen;
