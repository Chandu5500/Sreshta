import { useEffect, useState } from "react"

export function TimerEvents1(){
    
    const [time, setTime] = useState();
    function LoadTime(){
        var now = new Date();
        setTime(now.toLocaleTimeString());
    }

    var timer;

    useEffect(()=>{
        timer = setInterval(LoadTime, 1000);
    },[])

    function handleStopClick(){
        alert("Stop Clicked")
        clearInterval(timer);

    }

    return(
        <div className="container-fluid">
            <div className="text-center">
                <h2 className="mt-4">{time}</h2>
                <button onClick={handleStopClick} className="me-2">
                    <span className="bi bi-stop-fill"></span>
                </button>
                <button>
                    <span className="bi bi-play-fill"></span>
                </button>
            </div>
        </div>
    )   
}