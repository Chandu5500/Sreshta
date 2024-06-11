import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Tutorial2(){
    return(
        <div className="container-fluid">
            <h2>Tutorial - Web Technologies</h2>
            <BrowserRouter>
                <section className="row">
                    <div className="col-3">
                        <div className="btn-group-vertical">
                            <Link to="html" className="btn btn-primary mb-2">HTML</Link>
                            <Link to="css" className="btn btn-primary">CSS</Link>
                        </div>
                    </div>
                    <main className="col-9">
                    <Routes>
                        <Route path="/" element={<p>Online Tutorial Home for HTML and CSS</p>}></Route>
                        <Route path="html" element={<div><h3>HTML</h3><p>It is a markup language.</p></div>}></Route>
                        <Route path="css" element={<div><h3>CSS</h3><p>It defines styles for HTML.</p></div>}></Route>
                        <Route path="*" element={<code>404 : Page you requested not found</code>}></Route>
                    </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}