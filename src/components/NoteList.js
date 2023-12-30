import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.content}
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
