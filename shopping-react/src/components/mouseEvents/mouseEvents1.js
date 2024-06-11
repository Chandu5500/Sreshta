import { useState } from "react"

export function MouseEvents1(){
    const [slide, setSlide] = useState("Slide_1.png")
    function handleDown(){
        setSlide('Slide_2.png');
    }
    function handleUp(){
        setSlide('Slide_1.png');
    }
    return(
        <div className="container-fluid">
            <img src={slide} onMouseDown={handleDown} onMouseUp={handleUp}/>
            <p>Move mouse over image</p>
        </div>
    )
}