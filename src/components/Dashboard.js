import "./styles/Dashboard.css";
import React from "react";
import { Note } from "./Note";

export const Dashboard = (props) => {
  
  const delete_note = (id_note) => {
    props.setNotes(props.notes.filter(elem => elem['id'] != id_note));
  }

  return (  
    <div className="dash-container">
      {props.notes.map(elem => {
        return <Note title={elem.title} content={elem.content} id={elem.id} delete={delete_note} />
      })}
    </div>
  );
};
