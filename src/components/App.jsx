import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [storeNote, setNote] = useState({
    id: '',
    title: '',
    content: '',
  });

  function add(note) {
    setNote({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  }

  const [notes, setNotes] = useState([]);
  function setnotes() {
    setNotes([
      ...notes,
      {
        id: storeNote.id,
        title: storeNote.title,
        content: storeNote.content,
      },
    ]);
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((element) => {
        if (id == element.id) return false;
        else return true;
      })
    );
  }

  if (storeNote.id != '') {
    setnotes();
    setNote({
      id: '',
      title: '',
      content: '',
    });
  }

  return (
    <div className="app-container">
      <Header />
      <CreateArea add={add} />
      <Note key={storeNote.id} notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
