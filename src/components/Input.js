import React from "react";
import './styles/Input.css';

export const Input = (props) => {

  const handleAddNote = () => {
    //Tomar datos del text area
    let content = '';
    let title = '';

    content = document.getElementById('content-area').value;
    title = document.getElementById('title-area').value;

    //Agregar info de nota al estado
    props.setNotes(props.notes.concat({id:props.id + 1,title: title, content: content}));
    props.setId(props.id + 1);
    //Limpiar campos luego de agregar nota
    document.getElementById('title-area').value = '';
    document.getElementById('content-area').value = '';
  }

  return(
    <div className="input-container">
      <form>
        <div>
          <textarea className="text-area" placeholder="Title" name="title-area" id="title-area" required></textarea>
        </div>
        <div>
          <textarea className="text-area" placeholder="Content Text" name="content-area" id="content-area" required></textarea>
        </div>
      </form>
      <button onClick={handleAddNote} className="input-button"><span className="material-symbols-outlined icon">
note_add
</span></button>
    </div>
  );
}