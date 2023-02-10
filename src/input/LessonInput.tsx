import React, {useState} from 'react';

import Input from "./components/Input";
import Btn from "./components/Btn";


type LessonInputPropsType = {
    newMessage: string
    callBack: () => void
}
const LessonInput = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        console.log(title)
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className='App'>

            {/*<FullInput callBack={addMessage}/>*/}

            <Input setTitle={setTitle} title={title}/>
            <Btn name={'+'} callBack={()=>{}}/>

            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    );
};

export default LessonInput;