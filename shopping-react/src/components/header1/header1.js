
import "./header1.css";


export function Header1(){

    return(
        <nav className="nav">
            <div className="wrapper">
                <div className="logo"><a href="#">Kingsway Service</a></div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li>
                            <a href="#">Dropdown</a>
                            <ul className="drop-menu">
                                <li><a href="#">Drop Memu 1</a></li>
                                <li><a href="#">Drop Memu 2</a></li>
                                <li><a href="#">Drop Memu 3</a></li>
                                <li><a href="#">Drop Memu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Mega Menu</a>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <img src="./minions.jpg" alt="img"/>
                                    </div>
                                    <div className="row">
                                        <header>Design Services</header>
                                        <ul className="mega-links">
                                            <li><a href="#">Graphics</a></li>
                                            <li><a href="#">Vectors</a></li>
                                            <li><a href="#">Bussiness cards</a></li>
                                            <li><a href="#">Custom logo</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Email Services</header>
                                        <ul className="mega-links">
                                            <li><a href="#">Personal Email</a></li>
                                            <li><a href="#">Business Email</a></li>
                                            <li><a href="#">Mobile Email</a></li>
                                            <li><a href="#">Web Marketing</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Security Services</header>
                                        <ul className="mega-links">
                                            <li><a href="#">Site Seal</a></li>
                                            <li><a href="#">VPS Hosting</a></li>
                                            <li><a href="#">Private Seal</a></li>
                                            <li><a href="#">Website Design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
            </div>
        </nav>
    )
}