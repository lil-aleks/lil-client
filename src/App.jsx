import React from 'react';
import './css/App.css';
import { Home } from './pages/Home';
import { Error } from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
export const App = () => {

    return (
        <React.StrictMode>

                <Router basename='/lil-client'>
                    <div className="glow-card">
                        <select className='lang-selector' onChange={e => {

                            if(e.target.value === "de") {
                                document.getElementById("en").style.display = "none";
                                document.getElementById("de").style.display = "block";
                            } else {
                                document.getElementById("en").style.display = "block";
                                document.getElementById("de").style.display = "none";
                            }

                        }}>
                            <option value="de">Deutsch</option>
                            <option value="en">English</option>
                        </select>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/*' element={<Error/>}/>
                            <Route path='/test' element={<Home/>}/>
                        </Routes>
                    </div>
                </Router>
            
        </React.StrictMode>
    );

};