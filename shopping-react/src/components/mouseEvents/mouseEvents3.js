import { useState } from "react"

export function MouseEvents3(){
    const [styleObject, setStyleObject] = useState({position:'', top:'', left:''})
    function GetPosition(e){
        setStyleObject({
            position: 'fixed',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        })
    }
    return(
        <div className="container-fluid" onMouseMove={GetPosition}>
            <div style={{height:'1000px'}}>
                <p>Move mouse pointer to test</p>
            </div>
            <img src="run.gif" style={styleObject} width="50" height="50"/>
        </div>
    )
}