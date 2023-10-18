import React,{useState} from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  const [contacts,setContacts] = useState([]);
  const addContact=(contact)=>{
    setContacts(prevContacts=>[...prevContacts,contact]);
  }
  return (
    <div className="App">
      <h1>Simple Contact App</h1>
      <ContactForm addContact={addContact}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
