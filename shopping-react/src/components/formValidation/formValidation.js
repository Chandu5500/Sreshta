import { useState } from "react"

export function FormValidation(){
    const [userDetails, setUserDetails] = useState({UserName:'', Age:0, Mobile:'', City:''});
    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [cityError, setCityError] = useState('')
    function NameChange(e){
        setUserDetails({
            UserName: e.target.value,
            Age: userDetails.Age,
            Mobile: userDetails.Mobile,
            City: userDetails.City
        })
        if(userDetails.UserName!==''){
            setNameError('');
        }
    }
    function AgeChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: e.target.value,
            Mobile: userDetails.Mobile,
            City: userDetails.City
        })
        if(userDetails.Age!==''){
            setAgeError('');
        }
        if(isNaN(userDetails.Age)){
            setAgeError('Age must be number');
        }else{
            setAgeError('');
        }
    }
    function MobileChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            Mobile: e.target.value,
            City: userDetails.City
        })
    }
    function CityChange(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            Mobile: userDetails.Mobile,
            City: e.target.value
        })
    }
    function FormSubmit(e){
        e.preventDefault();
        if(userDetails.UserName==''){
            setNameError("User name required")
        }
        if(userDetails.Age==''){
            setAgeError("Age required")
        }else{
            if(isNaN(userDetails.Age)){
                setAgeError("Age must be a number")
            }
        }
        if(userDetails.Mobile.match(/\+91\d{10}/)){
            setMobileError('');
        }else{
            setMobileError("Invalid Mobile : 91+ and 10 digits")
        }
        if(userDetails.City=="-1"){
            setCityError("Please select your city")
        }else{
            setCityError("");
        }
    }
    return(
        <div className="container-fluid mt-3">
            <form onSubmit={FormSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={NameChange} type="text" /></dd>
                    <dd className="text-danger">{nameError}</dd>
                    <dt>Age</dt>
                    <dd><input onChange={AgeChange} type="text" /></dd>
                    <dd className="text-danger">{ageError}</dd>
                    <dt>Mobile</dt>
                    <dd><input onChange={MobileChange} type="text" /></dd>
                    <dd className="text-danger">{mobileError}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={CityChange}>
                            <option value='-1'>Select your city</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Hyd'>Hyd</option>
                            <option value='Chirala'>Chirala</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{cityError}</dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}