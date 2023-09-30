import React from 'react';
import './css/App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
export const App = () => {

    return (
        <React.StrictMode>
            
                <Router>
                    <div className="glow-card">
                        <Routes>
                            <Route path='lil-client/' element={<Home/>}/>
                        </Routes>
                    </div>
                </Router>
            
        </React.StrictMode>
    );

};