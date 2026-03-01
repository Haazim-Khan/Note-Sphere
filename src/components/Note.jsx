import React, { useState } from 'react';

function Getnotes(props) {
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

function Note(props) {
  if (props.notes.length != 0) {
    return (
      <div>
        {props.notes.map((element) => {
          return (
            <Getnotes
              key={element.id}
              id={element.id}
              title={element.title}
              content={element.content}
              deleteNote={props.deleteNote}
            />
          );
        })}
      </div>
    );
  }
}

export default Note;
