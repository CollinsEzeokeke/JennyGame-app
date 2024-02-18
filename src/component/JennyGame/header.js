import React from 'react';
import '../css/header/header.css'

function App() {
    return(
        <div id="get">
            <h1>Jenny's game</h1>
            {/*Cube Animation here*/}
            <div className="forwardSpin">
                <div className="backwardSpin">
                    <div className="forwardSpinInner">
                        <div className="black">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;