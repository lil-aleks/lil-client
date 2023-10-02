import React from 'react';
import "../css/404.css"

export const Error = () => {

    document.title = "Page not found"

    return (
        <React.StrictMode>
           <div className="error">
            <h1 className="error-title">
                404
            </h1>
            <p className='not-found'>
                This page is not existing.
            </p>
           </div>
        </React.StrictMode>
    );

};