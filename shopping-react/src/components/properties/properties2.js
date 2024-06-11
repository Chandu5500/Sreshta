import { useState } from "react";
import { Template } from "../template/template";

export function Properties2(){
    const [orientation, setOrientation] = useState('');
    function LayoutChange(e){
        if(e.target.value=="horizontal"){
            setOrientation(e.target.value);
        }else{
            setOrientation("vertical")
        }
    }
     return(
        <div className="container-fluid">
            <h2>Conditional Rendering</h2>
            <div className="mb-2">
                <select onChange={LayoutChange}>
                    <option value='-1'>Select Layout</option>
                    <option value='horizontal'>Horizontal</option>
                    <option value='vertical'>Vertical</option>
                </select>
            </div>
            <Template layout={orientation} />
        </div>
     )
}