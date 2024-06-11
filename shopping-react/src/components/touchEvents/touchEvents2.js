import { useState } from "react"

export function TouchEvents2(){
    const [styleObject, setStyleObject] = useState({width:'', height:''});

    function ZoomImage(){
        setStyleObject({
            width: "400px",
            height: "400px"
        })
    }
    function ZoomOut(){
        setStyleObject({
            width: "100px",
            height: "100px"
        })
    }   
    return(
        <div className="container-fluid">
            <div onTouchEnd={ZoomOut} className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <img style={styleObject} onTouchStart={ZoomImage} src="Slide_1.png" width='100' height='100'/>
            </div>
        </div>
    )
}