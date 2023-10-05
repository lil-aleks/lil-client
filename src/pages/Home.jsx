import React from 'react';

export const Home = () => {

    document.title = "lil-Client"

    return (
        <React.StrictMode>

            <div id='de'>
            <h1>lil-Client</h1>
            <p>Ein Minecraft Client für jede art von Spieler.</p>
            <button className='download-button'><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Herunterladen</a></button>
            </div>

            <div id='en'>
            <h1>lil-Client</h1>
            <p>A Minecraft client for every type of player.</p>
            <button className='download-button'><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Download</a></button>
            </div>

        </React.StrictMode>
    );

};