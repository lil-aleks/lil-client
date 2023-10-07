import React from 'react';
import '../css/Home.css';

export const Home = () => {

    document.title = "lil-Client"

    return (
        <React.StrictMode>

            <div id='de'>
                <h1>lil-Client</h1>
                <p>Ein Minecraft Client für jede art von Spieler.</p>
                <button className='download-button'>
                    <a rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Herunterladen</a>
                </button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='make-this-shit-horizontal'>
                    <button className='test-button test1'>&larr;</button>
                    <button className='test2 test-button'>&rarr;</button>
                    <div className='card card-not-active' id='1'>
                        <p>Test</p>
                    </div>
                    <div className='card card-active' id='2'>
                        <p>Test</p>
                    </div>
                    <div className='card card-not-active' id='3'>
                        <p>Test</p>
                    </div>
                </div>

            </div>
            <div id='en'>
                <h1>lil-Client</h1>
                <p>A Minecraft client for every type of player.</p>
                <button className='download-button'>
                    <a rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Download</a>
                </button>
            </div>

        </React.StrictMode>
    );

};