import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginComponent } from "../login/login";
import { Register } from "../register/register";

export function Tutorial3(){
    return(
        <div className="container-fluid">
            <h2>Shopping- Home</h2>
            <BrowserRouter>
                <section className="row">
                    <div className="col-3">
                        <div className="btn-group-vertical">
                            <Link to="login" className="btn btn-primary mb-2">Login</Link>
                            <Link to="register" className="btn btn-primary">Register</Link>
                        </div>
                    </div>
                    <main className="col-9">
                    <Routes>
                        <Route path="/" element={<h2>Shopping Home Page</h2>}></Route>
                        <Route path='login' element={<LoginComponent/>}></Route>
                        <Route path='register' element={<Register />}></Route>
                    </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}