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
        const timeRef = useRef();

   //FUNCTIONS
        //function to play/pause
        const playPauseToggle = () => {
            if(videoRef.current.paused) {
                videoRef.current.play();
            } else{
                videoRef.current.pause();
                console.log(videoRef.currentTime);
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
        const volumeHandler = (e) => {
            videoRef.current.volume = volumeRef.current.value;
            console.log(volumeRef.current.value);
        };

        //function to mute
        const muteEvent = () => {
            if(videoRef.current.muted === true) {
                videoRef.current.muted = false;
            } else{
                videoRef.current.muted = true;
            }
        }

        //function to change time in video
        const timeChange =() => {
            videoRef.currentTime = timeRef.current.value;
        }

return (
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video ref={videoRef} className="videoPlayer" src={src} title={title} autoPlay={false} loop={true}></video>
      <div className="controls">
            <button className="pinkBtn" onClick={playPauseToggle} data-icon="P" >Pl/Pa</button>

             <input className="timer" onChange={timeChange} min="0" max="100" step="1" ref={timeRef} type="range" label="timer"/>
             <input onChange={volumeHandler} defaultValue=".5" min="0.0" max="1.0" step=".01" type="range" ref={volumeRef}/>
             
             <button className="pinkBtn" onClick={muteEvent}>Mute</button>
        </div>
        <p className="title">{title}</p>
    </div>
)
}

export default Video;

/* Questions 
- Which aspects of the volumeHandler are required? Why doesn't the input work without the min/max, step, type, defaultvalue?
- 
*/