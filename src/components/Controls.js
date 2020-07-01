import React from 'react';
import '../Controls.css';

export default function Controls(props) {
    return (
        
        <div className="controls">
            <button className="playPause" data-icon="P" aria-label="play pause toggle">Pl/Pa</button>
            <button className="stop" data-icon="S" aria-label="stop">Stop</button>
             <div class="timer"><div></div><span aria-label="timer">00:00</span></div>
            {/* <button class="rwd" data-icon="B" aria-label="rewind"></button>
            <button class="fwd" data-icon="F" aria-label="fast forward"></button> */}
            {/* Create simple controls with icons and CSS*/}
        </div>
     

    )
}
