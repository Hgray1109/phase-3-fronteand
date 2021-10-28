import Dj from './dj.jsx'
import {useState} from 'react'

function StageCard({stage, djs}) 
{
    const [on, setOn] = useState(false)
function handleClick() {
    setOn(!on)


    } 


    return ( 
        <div>
            <button onClick={handleClick}>{stage.name}</button>

            {on? djs.map(dj => <Dj dj={dj} />) : null}
        </div>
    )
}

export default StageCard;

