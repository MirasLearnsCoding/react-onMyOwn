import React, { useState } from 'react'
import Hinata from '../images/Hinata.jpg'

const Task = () => {
    const [name, setName] = useState();
    return (
    <div>
        <h1>Here is a task for you</h1>
        <img src={Hinata} alt='Logo' />
        <div>What is this characters name?</div>
        <input placeholder='Write name' onChange={(e) => setName(e.target.value)}></input>
        {name === "Hinata"
            ? <div>Good job</div>
            : <div></div>
        }

    </div>
  )
}

export default Task