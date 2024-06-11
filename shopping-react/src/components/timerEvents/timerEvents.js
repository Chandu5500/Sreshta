import { useState } from "react"

export function TimerEvents(){
    const [msg, setMsg] = useState('');
    
    function Message1(){
        setMsg("Hello!")
    }
    function Message2(){
        setMsg("How are you?")
    }
    function Message3(){
        setMsg("Welcome to React")
    }
    var m1, m2, m3;
    function HandleClick(){
        m1 = setTimeout(Message1, 2000);
        m2 = setTimeout(Message2, 4000);
        m3 = setTimeout(Message3, 8000);
    }
    function CancelClick(){
        clearTimeout(m2);
    }

    return(
        <div className="container-fluid">
            <button onClick={HandleClick}>Show Message</button>
            <button onClick={CancelClick}>Cancel Message_2</button>
            <h2 className="text-center">{msg}</h2>
        </div>
    )
}