import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Tutorial1(){
    return(
        <div className="container-fluid">
            <h2>Tutorial - Web Technologies</h2>
            <BrowserRouter>
                <section className="row">
                    <div className="col-3">
                        <div className="btn-group-vertical">
                            <Link to="html">HTML</Link>
                            <Link to="css">CSS</Link>
                        </div>
                    </div>
                    <main className="col-9">
                    <Routes>
                        <Route path="html" element={<div><h3>HTML</h3><p>It is a markup language.</p></div>}></Route>
                        <Route path="css" element={<div><h3>CSS</h3><p>It defines styles for HTML.</p></div>}></Route>
                    </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}