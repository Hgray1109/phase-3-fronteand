import React from "react";
import StageCard from "./stageCard";
import {useEffect, useState} from 'react'
import Dj from './dj.jsx'
// import {useParams} from "react-router-dom";
// import logo from '../logo.png'
// import { NavLink } from "react-router-dom";



const Stage = ({data}) => { 
    
    // const [djs, setDjs] = useState([])

    // useEffect (() => {
    // fetch("http://localhost:9292/djs")
    // .then(res => res.json()
    // .then(djData => setDjs(djData)))
    // }, [])
    

    // function handleClick (e) {
        
    // //     // useEffect(() => {
    // //     //     fetch("http://localhost:9292/stages")
    // //     //     .then(res => res.json()
    // //     //     .then(jsData => setData(jsData)))
    // //     // }, [])

    //     return (
            
    //         <div> 
                
    //         </div>
    //     )  
    //  }

    return ( 
        <div className= "home">
            <h2>Stage</h2>
            <li> 
            {data.map(stage => <StageCard key={stage.id} stage={stage}/>)}
            </li>
        </div>
     );
}
 
export default Stage;
// function Header() {
//   return (
//     <div>
//         <NavLink
//           to="/"
//           style={{
//             color: "blue",
//             backgroundColor: "#614e423a",
//             borderRadius: "8px",
//           }}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/gym"
//           style={{
//             color: "blue",
//             backgroundColor: "#614e423a",
//             borderRadius: "8px",
//           }}
//         >
//           Gym
//         </NavLink>
//         <NavLink
//           to="/trainers"
//           style={{
//             color: "blue",
//             backgroundColor: "#614e423a",
//             borderRadius: "8px",
//           }}
//         >
//           Trainers
//         </NavLink>
//         <NavLink
//           to="/join"
//           style={{
//             color: "blue",
//             backgroundColor: "#614e423a",
//             borderRadius: "8px",
//           }}
//         >
//           Join Now
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default stage;
