import { NetflixRegister } from '../register/register'
import './main.css'

export function NetflixMain(){
    return(
        <div className="text-white text-center">
            <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
            <p>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
            <NetflixRegister />
        </div>
    )
}