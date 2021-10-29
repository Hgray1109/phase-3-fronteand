import Dj from './dj.js'
import {useState} from 'react'

function StageCard({stage}) 
{
    const [on, setOn] = useState(false)
function handleClick() {
    setOn(!on)


    } 


    return ( 
        <div>
            <button onClick={handleClick}>{stage.name}</button>

            {on? stage.djs.map(dj => <Dj dj={dj} />) : null}
        </div>
    )
}

export default StageCard;

