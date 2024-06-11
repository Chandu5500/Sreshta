import { useEffect, useState } from "react";
import "./cards.css";
import axios from "axios";

export function NasaAPICardStyleAxios(){
    const [mars, setMars] = useState([]);


    function LoadData(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>{
            setMars(response.data.photos)
        })
        .catch(ex=>{
            console.log(ex);
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
                        <div key={item.id} className="card m-2 p-2" id="card">
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