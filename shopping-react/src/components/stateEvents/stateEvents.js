import { useState } from "react"


export function StateEvents(){
    const [userName, setUserName] = useState('');
    const [userError, setUserError] = useState('');
    const [cityName, setCityName] = useState('');
    const [cityError, setCityError] = useState('');
    
    function handleUserName(e){
        setUserName(e.target.value)
    }
    function SubmitClick(){
        if(userName==""){
            setUserError("User name required");
        }else{
            document.write("Hello! "+userName+ " Your city is "+ cityName );
        }
        if(cityName=="notcity"){
            setCityError("Please select your city")
        }
    }
    function handleUserBlur(){
        if(userName==""){
            setUserError("User name required");
        }else{
            setUserError("")
        }
    }
    function handleUserKeyUp(){
        if(userName==""){
            setUserError("User name required");
        }else{
            setUserError("")
        }
    }
    function CityChanged(e){
        if(e.target.value=='notcity'){
            setCityError("Please enter your city");
        }else{
            setCityName(e.target.value);
            setCityError('');
        }
    }
    function UserFocus(){
        setUserError("Name is Mandatory")
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onFocus={UserFocus} onKeyUp={handleUserKeyUp} onBlur={handleUserBlur} onChange={handleUserName}/></dd>
                <dd className="text-danger">{userError}</dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={CityChanged}>
                        <option value='notcity'>Select City</option>
                        <option value='Chirala'>Chirala</option>
                        <option value='Vizag'>Vizag</option>
                        <option value='Bapatla'>Bapatla</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityError}</dd>
            </dl>
            <button onClick={SubmitClick}>Submit</button>
        </div>
    )
}