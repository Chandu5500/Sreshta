export function Slider(){
    return(
        <div className="container-fluid">
            <h2>Slider</h2>
            <div className="progress">
                <div className="progress-bar me-1 bg-dark" style={{width:'25%'}}>
                    Low Weight &lt; 53 kg
                </div>
                <div className="progress-bar me-1 bg-info" style={{width:'25%'}}>
                    Normal Weight
                </div>
                <div className="progress-bar me-1 bg-dark" style={{width:'25%'}}>
                    Over Weight
                </div>
                <div className="progress-bar bg-dark" style={{width:'25%'}} >
                    Obese
                </div>
            </div>
            <div>
                <span style={{marginLeft:'65%'}} className="bi bi-triangle-fill"></span>
            </div>
        </div>
    )
}