import { useState } from "react"

export function MouseEvents(){
    const [slide, setSlide] = useState("Slide_1.png")
    function handleOver(){
        setSlide('Slide_2.png');
    }
    function handleOut(){
        setSlide('Slide_1.png');
    }
    return(
        <div className="container-fluid">
            <img src={slide} onMouseOver={handleOver} onMouseOut={handleOut}/>
            <p>Move mouse over image</p>
        </div>
    )
}