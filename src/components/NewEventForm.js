import {useState} from 'react';

function NewEventForm({addVenu}) {

const[eventData, setEventData] =useState({
    name:'',
    price:'',

})


return (

    <form className="new-venu-form">
        <input onChange={(e) => setEventData({...eventData, name:e.target.value})} placeholder="Name"/>
        <input onChange={(e)=>setEventData({...eventData, price:e.target.value})} placeholder="Price" />
        <input onClick={(e) => {addVenu(eventData);e.preventDefault()}} type="submit" value="New Event" />
    </form>

);

}

export default NewEventForm;