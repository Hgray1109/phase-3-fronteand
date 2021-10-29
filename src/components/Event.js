import EventCard from './EventCard';



    function Event({venu, deleteHandler}) {

    const displayEvent = venu.map(venuObj => (
        <EventCard  key={venuObj} newVenu= {venuObj} deleteHandler={deleteHandler}/>
    ))
    // const [array, setArray] = useState(displayEvent)
    

    return (
        <div>
            <div>
                {displayEvent}
            </div>
             
        
        </div>

    );
}; 


export default Event;

