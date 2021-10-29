import useState from 'react'

    function deleteVenu({venu}) {
        fetch(`http://localhost:9292/events/${id}`, {
          method: "DELETE",
        }) .then(() => {
            const venus = venu.filter( (v) =>v.id !==venu)
        })
       
    

    return (
        <div>
            
             <button onClick={() => {deleteVenu}}>FlyAway</button>
        
        </div>

    );
}; 


export default Event;