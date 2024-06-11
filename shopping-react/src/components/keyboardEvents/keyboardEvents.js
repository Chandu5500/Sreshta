import { useState } from "react";


export function KeyboardEvents(){

    const [users] = useState([{"UserId":"John"},{"UserId":"John12"},{"UserId":"David"}]);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [toggle, setToggle] = useState({display:'none'}) 

    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId==e.target.value){
                setMsg("User name is taken - Try another");
                setError('text-danger');  //Bootstrap classes
                break;
            }else{
                setMsg("User name is Available");
                setError('text-success');  //Bootstrap classes
            }
        }
    }
    function VerifyPassword(e){
        if(e.which >= 65 && e.which <= 90 || e.keyCode >= 65 && e.keyCode <= 90){
            setToggle({display: 'block'});
        }else{
            setToggle({display: 'none'});
        }
    }
    return(
        <div className="container-fluid">
            <h2>Keyboard Events</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUserId}/></dd>
                <dd className={error}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyPassword}/></dd>
                <dd style={toggle} className="text-warning">
                    <span className="bi bi-exclamation-triangle"></span> Warning: Caps-On
                </dd>
            </dl>
        </div>
    )
}