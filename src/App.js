import './App.css';
import { Note } from './components/Note'
import { Dashboard } from './components/Dashboard'
import { Input } from './components/Input'
import { useState } from 'react';

function App() {

  const [notes,setNotes] = useState(
    [
    ]);
  const [id,setId] = useState(0);

  return (
    <div className="App app-container">
      <Input notes={notes} setNotes={setNotes} id={id} setId={setId}/>
      <Dashboard notes={notes} setNotes={setNotes} id={id} />
    </div>
  );
}

export default App;
