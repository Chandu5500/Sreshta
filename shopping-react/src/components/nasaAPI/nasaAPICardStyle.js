import { useEffect, useState } from "react"
import "./nasaAPICardStyle.css"

export function NasaAPICardStyle(){
    const [mars, setMars] = useState([]);


    function LoadData(){
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            setMars(data.photos);
        })
    }
    useEffect(()=>{
        LoadData();
    },[])
    return(
        <div className="container-fluid mt-3">
            <h2>Mars Rover photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.map(item=>
                        <div className="card m-2 p-2" id="card">
                            <img src={item.img_src} className="card-img-top" height="200"/>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}