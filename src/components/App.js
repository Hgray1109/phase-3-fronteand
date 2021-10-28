
import Navbar from './Navbar';
import {useEffect, useState } from 'react'
import Stage from './Stage'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stages")
    .then(res => res.json()
    .then(jsData => setData(jsData)))
}, [])

return ( 
      <div className="App">
        <Navbar />
         {/* <div className="content"> */}
           {/* <h1>Feather Festival</h1>
           <p> Fly high on the jet stream</p> */}
          {/* <div className="content"> */}
          <div className="content">
            <Stage data={data}/>
            </div>
          {/* </div> */}
        {/* //  </div> */}
    </div>
);
}


export default App;
