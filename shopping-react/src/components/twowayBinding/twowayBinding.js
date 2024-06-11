import { useState } from "react"

export function TwowayBinding(){
    const [username, setusername] = useState("")

    function HandleUserName(e){
        setusername(e.target.value)
    }
    return(
        <div className="container-fluid">
            <h2>User Registration</h2>
            <dl>
                <dt>User Name:</dt>
                <dd><input type="text" onKeyUp={HandleUserName}/></dd>
            </dl>
            <p>Hello! {username}</p>
        </div>
    )
}