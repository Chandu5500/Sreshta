import { useState } from "react"

export function MouseEvents4(){
    const [shirt, setShirt] = useState('Shirt.png')
    function ChangeColor(e){
        switch(e.target.id){
            case "red":
                setShirt('RedShirt.png');
                break;
            case "blue":
                setShirt('BlueShirt.png');
                break;
            case "green":
                setShirt('GreenShirt.png');
                break;
    }
    }
    return(
        <div className="container-fluid">
            <h2>T-Shirt</h2>
            <img src={shirt} width='200' height='200'/>
            <p className="mt-3">
                <div>
                    <span id="red" onMouseOver={ChangeColor} style={{backgroundColor: 'red', color:'white', cursor: 'grab'}} className="me-2 p-2">Red</span>
                    <span id="blue" onMouseOver={ChangeColor} style={{backgroundColor: 'blue', color:'white', cursor: 'grab'}} className="me-2 p-2">Blue</span>
                    <span id="green" onMouseOver={ChangeColor} style={{backgroundColor: 'green', color:'white', cursor: 'grab'}} className="me-2 p-2">Green</span>
                </div>
            </p>
        </div>
    )
}