import {useEffect,useState,} from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import uuid4 from 'uuid4';


function App(){
    const localStoragekey = "contact"
    const [contact, setContact] = useState(()=>{
       return JSON.parse(localStorage.getItem(localStoragekey))
       || []}) 
    

    useEffect(()=>{
        localStorage.setItem(localStoragekey, JSON.stringify(contact))
    },[contact])

    const addContact = (data) => {
     setContact([...contact,{id: uuid4(), data} ])
    }
    const removeContact= (id) =>{
      const updatedList = contact.filter((val)=>{
        return val.id !== id;
      })
      setContact(updatedList)
    }
    return(
        <div>
            <Header/>
            <AddContact addContact={addContact}/>
            <ContactList contact={contact} removeContact={removeContact}/>
        </div>
    );
}
export default App;