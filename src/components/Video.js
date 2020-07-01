import React, {useRef} from 'react';
// import Controls from './Controls';
import '../Video.css';

const Video = ({src, title}) => {
    //props coud be: active, autoplay, endcallback, progresscallback
   //states could be: playing, paused
    //REFS
        // video ref
        const videoRef = useRef();

        // render ref?
            // const renders = useRef(1);

        // volume ref
        const volumeRef = useRef();

        // timer ref

   //FUNCTIONS
// //playpause
// const playPauseToggle = () => {
//     if(videoRef.paused) {
//         videoRef.play();
//     } else {
//         videoRef.pause();
//     }
// }

        //function to play
        const playEvent = () => {
            videoRef.current.play();
        };

        // //function to pause can these be the same?
        const pauseEvent = () => {
            videoRef.current.pause();
        };
        //function to change volume

        const volumeHandler = () => {
            videoRef.current.volume = volumeRef.current.value;
        };
        //function to change time in video

return (
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video ref={videoRef} className="videoPlayer" src={src} title={title} autoplay="true" loop="true" controls="true"></video>
        <p>{title}</p>
      <div className="controls">
            <button className="playPause" onClick={playEvent} data-icon="P" >Pl/Pa</button>
            <button className="stop" onClick={pauseEvent} data-icon="S" >Stop</button>
             <div class="timer"><div></div><span aria-label="timer">00:00</span></div>
             <input onChange={volumeHandler} type="range" ref={volumeRef}></input>
        </div>
    </div>
)
}

export default Video;