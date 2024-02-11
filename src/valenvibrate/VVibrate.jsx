import React, { useState, useRef }  from 'react'
import './VVibrate.css'

const VVibrate = () => {

  const [message, setMessage] = useState("Peace will you be my Valentine");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(new Audio('/src/valenvibrate/vibrate.mp3'));

  const handleClickno = () => {
    // This for normal vibration not audio
    if ("vibrate" in navigator) {
      navigator.vibrate(loop); // Vibrate for 200ms or more depend on ur choice and you can also set it to loop if you like
    } else {
      console.log("Omo na laptop or iphone you dey use");
    }; 
    // Bro this for the audio vibration
    audioRef.current.loop = true; // Set looping to true
    audioRef.current.play(); // Start playing the audio
    setIsAudioPlaying(true); // Update the state to indicate audio is playing
  }

  const handleClickyes = () => { 
    setMessage("Thank you for accepting me as your valentine");
    
    if (isAudioPlaying && audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      setIsAudioPlaying(false);
    }
  }
  
  return (
      <div>
          <div className="contentval">
        <p>{message}</p>
              <div className="btn">
              <button className='yesbtn'  onClick={handleClickyes}>YES ❤️</button>
          <button className='nobtn' onClick={handleClickno}>NO 💀</button>    
              </div>
              </div>     

    </div>
  )
}

export default VVibrate
