
export function OnewayBinding(){
    var username = "Chandu"
    return(
        <div>
            <h3>Oneway Binding</h3>
            User name: <input type="text" value={username}></input>
            <p>Hello! {username}</p>
        </div>
    )
}