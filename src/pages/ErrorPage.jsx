import React from 'react';
import "../css/Error.css"

export const Error = () => {

    document.title = "Page not found"

    return (
        <React.StrictMode>
           <div className="error">
            <h1 className="error-title">
                404
            </h1>
            <div id='de'>
                <p className='not-found'>
                    Diese Seite existiert nicht.
                </p>
            </div>
            <div id='en'>
                <p className='not-found'>
                    This page is not existing.
                </p>
            </div>
            
           </div>
        </React.StrictMode>
    );

};