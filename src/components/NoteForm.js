import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ content: newNote });
    setNewNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={newNote} onChange={handleInputChange}></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
