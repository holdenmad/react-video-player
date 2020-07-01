import React, {useRef} from 'react';
// import Controls from './Controls';
import '../Video.css';

export default function Video({src, title}) {
    //props coud be: active, autoplay, endcallback, progresscallback
   //states could be: playing, paused
    //REFS
        // video ref
        const video = useRef();

        // render ref?
            // const renders = useRef(1);

        // volume ref
        const volume = useRef();

        // timer ref

   //FUNCTIONS
        //function to play
        const playEvent = () => {
            video.current.play();
        };

        //function to pause can these be the same?
        const pauseEvent = () => {
            video.current.pause();
        };
        //function to change volume

        const volumeHandler = () => {
            video.current.volume = volume.current.value;
        };
        //function to change time in video

return (
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video className="video" src={src} ref={video} title={title}/>
        <p>{title}</p>
      <div className="controls">
            <button className="playPause" onClick={playEvent} data-icon="P" >Pl/Pa</button>
            <button className="stop" onClick={pauseEvent} data-icon="S" >Stop</button>
             <div class="timer"><div></div><span aria-label="timer">00:00</span></div>
             <input onChange={volumeHandler} type="range" ref={volume}></input>
        </div>
    </div>
)
}