import './index.css';
import { NetflixHeader } from '../header/header';
import { NetflixMain } from '../main/main';

export function NetflixIndex (){
    return(
        <div id='banner'>
            <div id='shade'>
                <NetflixHeader />
                <main>
                    <div>
                        <NetflixMain />
                    </div>
                </main>
            </div>
        </div>
    )
}