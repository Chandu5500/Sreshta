import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Tutorial(){
    return(
        <div className="container-fluid">
            <h2>Tutorial - Web Technologies</h2>
            <BrowserRouter>
                <Routes>
                    <Route path="html" element={<div><h3>HTML</h3><p>It is a markup language.</p></div>}></Route>
                    <Route path="css" element={<div><h3>CSS</h3><p>It defines styles for HTML.</p></div>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}