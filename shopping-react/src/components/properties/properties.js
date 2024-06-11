import { LoginComponent } from "../login/login";


export function Properties(){
    return(
        <div className="container-fluid">
            <LoginComponent title='Admin' login_id='Email' login_type="email"/>
        </div>
    )
}