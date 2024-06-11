import { useState } from "react"

export function MouseEvents2(){
    function StartMarquee(e){
        e.target.start();
    }
    function StopMarquee(e){
        e.target.stop();
    }
    
    return(
        <div className="container-fluid">
            <h2>Mouse Events</h2>
            <marquee onMouseOver={StopMarquee} omMouseOut={StartMarquee} scrollamount="10">
                <img src="Slide_1.png" className="me-2" width="100" height="100"/>
                <img src="Slide_2.png" className="me-2" width="100" height="100"/>
                <img src="Slide_3.png" className="me-2" width="100" height="100"/>
            </marquee>
        </div>
    )
}