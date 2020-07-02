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

        const playPauseRef = useRef();

   //FUNCTIONS
        //function to play/pause
        const playPauseToggle = () => {
            if(videoRef.current.paused) {
                videoRef.current.play();
                playPauseRef.current.innerHTML = "Pause";
            } else{
                videoRef.current.pause();
                playPauseRef.current.innerHTML = "Play";
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
        const handleTimeUpdate =() => {
            const timeValue = videoRef.current.currentTime / videoRef.current.duration;
            timeRef.current.value = timeValue;
            console.log(timeValue)
        }

        const handleTimeScrobble = (e) => {
            videoRef.current.currentTime = e.currentTarget.value * videoRef.current.duration;
            console.log(e.currentTarget.value);
        }

return ( 
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video ref={videoRef} className="videoPlayer" onTimeUpdate={handleTimeUpdate} src={src} title={title} autoPlay={false} loop={true}></video>
      <div className="controls">
            {/*Play/Pause Button*/}
            <button className="playPauseBtn pinkBtn" ref={playPauseRef} onClick={playPauseToggle} data-icon="P">Play</button>
            {/*Timer Slider - to change time? display time? onTimeUpdate?*/}
             <input className="timer slider" onClick={handleTimeScrobble} defaultValue="0" min="0" max="1" step=".01" ref={timeRef} type="range" label="timer"/>
            {/*Volume Slider*/}
             <input className="volume slider" onChange={volumeHandler} defaultValue=".5" min="0.0" max="1.0" step=".01" type="range" ref={volumeRef}/>
            {/**/}
             <button className="muteBtn pinkBtn" onClick={muteEvent}>Mute</button>
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