
export function NetflixRegister(){
    return(
        <div>
            <div className="mt-3">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-group input-group-lg" id="registerinputbtn">
                    <input type="email" placeholder="Email address" className="form-control"></input>
                    <button className="btn btn-danger">
                        Get Started
                        <span className="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}