import React, { use, useState } from 'react';
import Note from './Note';

function CreateArea(props) {
  const [id, setId] = useState(1);

  const [note, setNote] = useState({
    title: '',
    content: '',
  }); 

  function storeNote(event) {
    const value = event.target.value; 
    const name = event.target.name; 
    if (name === 'title') { 
      setNote({
        title: value, 
        content: note.content, 
      });
    } else {
      setNote({
        title: note.title, 
        content: value, 
      });
    }
  }

  function set_note(event) {
    event.preventDefault();
    if (note.title != '' && note.content != '') {
      props.add({
        id: id,
        title: note.title,
        content: note.content,
      });
      setId(id + 1);
      setNote({
        title: '',
        content: '',
      });
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={storeNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={storeNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={set_note}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
