import {useState} from 'react';

function NewEventForm({addVenu}) {

const[eventData, setEventData] =useState({
    name:'',
    price:'',

})


return (

    <form className="new-venu-form" onClick={(e) => {addVenu(eventData, e)}}>
        <input onChange={(e) => setEventData({...eventData, name:e.target.value})} placeholder="Name"/>
        <input onChange={(e)=>setEventData({...eventData, price:e.target.value})} placeholder="Price" />
        <input type="submit" value="New Event" />
    </form>

);

}

export default NewEventForm;