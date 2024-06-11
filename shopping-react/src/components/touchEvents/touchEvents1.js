import { useState } from "react"

export function TouchEvents1(){
    const [msg, setMsg] = useState('');
    function SeletedCourse(e){
        switch(e.target.id){
            case 's1':
                setMsg("Slide_1 image");
                break;
            case 's2':
                setMsg("Slide_2 image");
                break;
            case 's3':
                setMsg("Slide_3 image");
                break;
        }
    }
    return(
        <div className="container-fluid">
            <p>Touch the course bannner to the details</p>
            <div className="mt-3">
                <img id='s1' onTouchStart={SeletedCourse} src="Slide_1.png" width='100' height='100'/>
                <img id='s2' onTouchStart={SeletedCourse} src="Slide_2.png" width='100' height='100'/>
                <img id='s3' onTouchStart={SeletedCourse} src="Slide_3.png" width='100' height='100'/>
            </div>
            <p>{msg}</p>
        </div>
    )
}