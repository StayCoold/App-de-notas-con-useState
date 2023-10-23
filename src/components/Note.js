import React from "react";
import './styles/Note.css'

export const Note = (props) => {

    const handleDelete = () => {
        props.delete(props.id);
    }


    return (
        <div className="note-container">
            <div className="note-head">
                <span>Nota id: {props.id}</span>
                <button onClick={handleDelete} className="delete-icon-link"><span className="material-symbols-outlined delete-icon">delete</span></button>
            </div>
            <div className="note-title">{props.title}</div>
            <div className="note-content">{props.content}</div>
        </div>
    );
}