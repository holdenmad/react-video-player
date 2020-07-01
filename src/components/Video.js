import React, {useRef} from 'react';
// import Controls from './Controls';
import '../Video.css';

const Video = ({src, title}) => {
    //props coud be: active, autoplay, endcallback, progresscallback
   //states could be: playing, paused
    //REFS
        // video ref
        const videoRef = useRef();

        // volume ref
        const volumeRef = useRef();

        // timer ref

   //FUNCTIONS
        //playpause - do we need to set a state? 
        const playPauseToggle = () => {
            if(videoRef.current.paused) {
                videoRef.current.play();
                
            } else{
                videoRef.current.pause();
                console.log(videoRef.current.readyState);
            }
        }

        //function to play
        // const playEvent = () => {
        //     videoRef.current.play();
        // };

        // // //function to pause can these be the same?
        // const pauseEvent = () => {
        //     videoRef.current.pause();
        // };
        //function to change volume

        const volumeHandler = () => {
            videoRef.current.volume = volumeRef.current.value;
        };
        //function to change time in video

return (
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video ref={videoRef} className="videoPlayer" src={src} title={title} autoPlay={false} loop={true}></video>
        <p>{title}</p>
      <div className="controls">
            <button className="playPause" onClick={playPauseToggle} data-icon="P" >Pl/Pa</button>
            {/* <button className="stop" onClick={pauseEvent} data-icon="S" >Stop</button> */}
             <div className="timer"><div></div><span aria-label="timer">00:00</span></div>
             <input onChange={volumeHandler} type="range" ref={volumeRef}></input>
        </div>
    </div>
)
}

export default Video;