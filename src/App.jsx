import React, { useState } from 'react';
import './css/App.css';
import { Home } from './pages/Home';
import { Error } from './pages/404Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
export const App = () => {

    return (
        <React.StrictMode>
            
                <Router>
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
                            <Route path='lil-client/' element={<Home/>}/>
                            <Route path='lil-client/*' element={<Error/>}/>
                        </Routes>
                    </div>
                </Router>
            
        </React.StrictMode>
    );

};