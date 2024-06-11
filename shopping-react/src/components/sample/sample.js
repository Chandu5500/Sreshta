import { useState } from "react"

export function Sample(){
    const [gender, setGender] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    function MaleChange(e){
        if(e.target.checked){
            setGender(e.target.value)
        }
    }
    function FemaleChange(e){
        if(e.target.checked){
            setGender(e.target.value)
        }
    }
    function DetailsClick(){
        setSelectedGender(gender);
    }

    return(
        <div className="container-fluid">
            <h2>Radio</h2>
            <input type="radio" onChange={MaleChange} name="gender" value="Male"/>Male
            <input type="radio" onChange={FemaleChange} name="gender" value="Female"/>Female
            <br/>
            <button onClick={DetailsClick}>Get Details</button>
            <p>You selected the Gender: {selectedGender}</p>
        </div>
    )
}