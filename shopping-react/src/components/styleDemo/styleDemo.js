import { useState } from "react";

export function StyleDemo(){
    const [styleObject, setStyleObject] = useState({border:'', boxShadow:''});
    const [userError, setUserError] = useState('');
    function handleUserName(e){
        if(e.target.value.charCodeAt(0)>=65 && e.target.value.charCodeAt(0) <= 90) {
            setStyleObject({
                border: '2px solid green',
                boxShadow: '2px 2px 3px green'
            });
            setUserError('');
        }else {
            setStyleObject({
                border: '2px solid red',
                boxShadow: '2px 2px 3px red'
            
            });
            setUserError('Name must start with Upper letter');
        }      
    }
    return(
        <div className="cobtainer-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" style={styleObject} onBlur={handleUserName}/></dd>
                <dd className="text-danger">{userError}</dd>
            </dl>
        </div>
    )
}   