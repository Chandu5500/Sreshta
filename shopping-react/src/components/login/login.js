import './login.css'

export function LoginComponent(props){
    return(
        <div id='form-container' className='container-fluid'>
            <form>
                <div>
                    <h2><span className='bi bi-person-fill'></span>{props.title}</h2>
                    <div className='mb-2'>
                        <label className='form-label'>{props.login_id}</label>
                        <div>
                            <input type={props.login_type} className='form-control'></input>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Password</label>
                        <div>
                            <input type="password" className='form-control'></input>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary w-100'>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}