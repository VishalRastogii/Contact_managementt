import React, {useState} from 'react'

export default function AddContact({addContact}) {
  const [contactData, setContactData] = useState({name:"", email:""});

  const handleChange = (e) =>{
    if(e.target.name === "name"){
      setContactData({...contactData, name: e.target.value})
    }
    else{
      setContactData({...contactData, email: e.target.value})
    }
  }
  const handleAdd=()=>{
    if(contactData.name ==="" || contactData.email ===""){
      alert("please fill all the details")
      return
    }
    
    addContact(contactData)
    setContactData({name:"", email:""})
  }
  return (
    <div>
        <div className='add-contact'>Add Contact</div>
        <form>
          <label>Name:</label><br/>
          <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>
          <label>Email:</label><br/>
          <input type='email' placeholder='Enter Email' name='email' value={contactData.email}onChange={handleChange}/>

        </form>
        <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}
