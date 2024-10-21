import React, { useState } from 'react'
import MyModal from '../components/MyModal/MyModal'
import Minato from '../images/Minato.jpg'

const Mission = () => {
    const [modal, setModal] = useState(false)
    const [answer, setAnswer] = useState();
    return (
    <div>
        <h1>Here is a mission for you!</h1>
   
        <div> Answer to this question: Who is the 4th hokage?</div>
        <input placeholder='Answer here' onChange={(e) => setAnswer(e.target.value)}></input>
        {answer === 'Minato'
            ?   <MyModal visible={true} setVisible={setModal}>
                    <h1>You are right! It is Minato</h1>
                    <img src={Minato} alt="Minato"/>
                </MyModal>
            : <div></div>
        }
        
        <MyModal visible={modal} setVisible={setModal}>
            <h1>Minato</h1>
            <img src={Minato} alt="Minato"/>
        </MyModal>
    </div>
  )
}

export default Mission