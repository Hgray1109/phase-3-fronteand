import React from 'react'


function EventCard ({newVenu, deleteHandler}) {
   const {name, price, id} = newVenu
   
   



    function deleteVenu(id) {
    fetch(`http://localhost:9292/events/${id}`,{
          method: "DELETE",
        }).then(() => deleteHandler(id)
    
        )
       
    }
    




    return (  
         <div>
             <h3>{name}</h3>
             <p>{price}</p>
             <button onClick={() => deleteVenu(id)}>FlyAway</button>
         </div>


    )
}







export default EventCard;