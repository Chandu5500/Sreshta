
export function Template(props){
    if(props.layout=="horizontal"){
        return(
            <div>
                <span className="me-4">Facebook</span>
                <span className="me-4">Twitter</span>
                <span className="me-4">Instagram</span>
            </div>
        )
    }else{
        return(
            <div>                
                <div className="mb-3 bi bi-facebook"></div>
                <div className="mb-3 bi bi-twitter"></div>
                <div className="mb-3 bi bi-instagram"></div>
                <div className="mb-3 bi bi-linkedin"></div>               
            </div>
        )
    }
}