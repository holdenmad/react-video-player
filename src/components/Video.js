import React, {useRef} from 'react';
// import Controls from './Controls';
import '../Video.css';

//Fuction for calculating correct time display
function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); };
    const time = parseFloat(timeInSeconds).toFixed(3);
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time - minutes * 60);

    if (hours === 0) return minutes + ':' + pad(seconds, 2);

    return hours + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
}

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
        const handleTimeUpdate =() => {
            const timeValue = videoRef.current.currentTime / videoRef.current.duration;
           // timeRef.current.value = timeValue;
            timeRef.current.innerHTML = sec2time(videoRef.current.currentTime) + '/' + sec2time(videoRef.current.duration);

        }

        const handleTimeScrobble = (e) => {
            videoRef.current.currentTime = e.currentTarget.value * videoRef.current.duration;
            console.log(e.currentTarget.value);
            console.log(videoRef.currentTime);
        }

        

return (
    <div className="c-video">
    {/*Make simple HTML video with source*/}
        <video ref={videoRef} className="videoPlayer" onTimeUpdate={handleTimeUpdate} src={src} title={title} autoPlay={false} loop={true}></video>
      <div className="controls">
            {/*Play/Pause Button*/}
            <button className="pinkBtn" onClick={playPauseToggle} data-icon="P">Pl/Pa</button>
            {/*Timer Slider - to change time? display time? onTimeUpdate?*/}
             <input className="timer" onClick={handleTimeScrobble} defaultValue="0" min="0" max="1" step=".01" ref={timeRef} type="range" label="timer"/>
            {/*Volume Slider*/}
             <input className="volume" onChange={volumeHandler} defaultValue=".5" min="0.0" max="1.0" step=".01" type="range" ref={volumeRef}/>
            {/**/}
             <button className="pinkBtn" onClick={muteEvent}>Mute</button>
             <span className="timeDisplay" ref={timeRef}>
             </span>
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