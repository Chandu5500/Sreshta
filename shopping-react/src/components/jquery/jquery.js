import { useEffect, useState } from "react";
import "./jquery.css";
import $ from 'jquery'

export function NasaAPICardStyleJquery(){
    const [mars, setMars] = useState([]);


    function LoadData(){
        $.ajax({
            method: "get",
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY",
            success: (response)=>{
                setMars(response.photos);
            }
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