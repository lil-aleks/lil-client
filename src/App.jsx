import React from 'react';
import './css/App.css';
import { Home } from './pages/Home';
import { Error } from './pages/404Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
export const App = () => {

    return (
        <React.StrictMode>
            
                <Router>
                    <div className="glow-card">
                        <Routes>
                            <Route path='lil-client/' element={<Home/>}/>
                            <Route path='lil-client/*' element={<Error/>}/>
                        </Routes>
                    </div>
                </Router>
            
        </React.StrictMode>
    );

};