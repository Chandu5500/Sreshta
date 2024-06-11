import { useState } from "react"

export function TouchEvents(){
    const [styleObject, setStyleObject] = useState({position:'', left:'', top:''})

    function GetPosition(e){
        setStyleObject({
            position: 'fixed',
            left: e.touches[0].clientX + 'px',
            top: e.touches[0].clientY + 'px'
        })
    }

    return(
        <div className="container-fluid">
            <p>Drag and Drop with your touch</p>
            <img style={styleObject} onTouchMove={GetPosition} src="shirt.png" width='100' height='100'></img>
        </div>
    )
}