
import Navbar from './Navbar';
import {useEffect, useState } from 'react'
import Stage from './Stage.js'
import Event from './Event'
import NewEventForm from './NewEventForm'


function App() {
  const [data, setData] = useState([])
  const [venu, setVenu ] = useState([])
  const [venuVisable, setVenuVisable] =useState(true)

  useEffect(() => {
  fetch("http://localhost:9292/events")
  .then(res => res.json())
  .then(eventobj => setVenu(eventobj))
}, [])

    const deleteHandler = (id) => {
        const newVenuArray = venu.filter((venuObj) => venuObj.id !==id)
        setVenu(newVenuArray)
        }


  function addVenu(newEvent, e) {
    e.preventDefault()
    
    fetch("http://localhost:9292/events", {
      method: "POST",
      headers: {
        'Content_type': 'application/json'
      },
      body:JSON.stringify(newEvent)})
      .then(resp => resp.json())
      .then(resp => {setVenu([...venu, resp])
        console.log(venu)
      })
  }
 


  useEffect(() => {
    fetch("http://localhost:9292/stages")
    .then(res => res.json()
    .then(jsData => setData(jsData)))
}, [])



  //remove it from state 

  //fetch(/djs/id) {method: DELETE

// function createEvent(){
  //adding a event to state

  //fetch(/djs) {method: POST}

return ( 
      <div className="App">
        <div className="sidebar">
        <button onClick= {() => setVenuVisable(!venuVisable)}>Hide Form</button>
        {venuVisable? <NewEventForm addVenu={addVenu} /> : null}
      </div>
        <Navbar />
         {/* <div className="content"> */}
           {/* <h1>Feather Festival</h1>
           <p> Fly high on the jet stream</p> */}
          {/* <div className="content"> */}
          <div className="content">
            <Stage data={data}/>
          </div>
          <div>
            <Event venu={venu} setVenu={setVenu} deleteHandler={deleteHandler}/>
          </div>

          {/* </div> */}
        {/* //  </div> */}
    </div>
);
}


export default App;
