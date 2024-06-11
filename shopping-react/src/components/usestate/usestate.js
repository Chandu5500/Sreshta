import { useState } from "react"

export function Usestate(){
    const [username, setusername] = useState("Chandu")
    return(
        <div>
            <h2>OnewayBinding</h2>
            <h3>useState</h3>
            User name: <input type="text" value={username}></input>
            <p>Hello! {username}</p>
        </div>
    )
}