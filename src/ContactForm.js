import React,{useState} from 'react'

function ContactForm({addContact}) {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name&&phone){
            addContact({name,phone});
            setName('');
            setPhone('');
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="Name"/>
            <input
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            placeholder="Phone"/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default ContactForm;