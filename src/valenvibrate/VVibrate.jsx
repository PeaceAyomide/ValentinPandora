import React, { useState, useRef }  from 'react'
import './VVibrate.css'
import vibrateSound from './vibrate.mp3'
// pics
import Skull from '../valenvibrate/skull.gif'
import Love from '../valenvibrate/love.gif'

const VVibrate = () => {

  const [message, setMessage] = useState("Will you be my Valentine ?");
  const [noMessage, setNoMessage] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(new Audio(vibrateSound));
  const [showSkull, setShowSkull] = useState(false);
const [showLove, setShowLove] = useState(false)

  const handleClickno = () => {
    // This for normal vibration not audio
    if ("vibrate" in navigator) {
      navigator.vibrate(500); // Vibrate for 200ms or more depend on ur choice and you can also set it to loop if you like
    } else {
      console.log("Omo na laptop or iphone you dey use");
    }; 
    // Bro this for the audio vibration
    audioRef.current.loop = true; // Set looping to true
    audioRef.current.play(); // Start playing the audio
    setIsAudioPlaying(true); // Update the state to indicate audio is playing
    setMessage(false)
    setNoMessage("⚠️VIRUS is now being Downloaded on your phone, Good Luck lol")
    setShowSkull(true);
    setShowLove(false);
  }

  const handleClickyes = () => { 
    setMessage("Thank you for accepting me as your Val");
    
    if (isAudioPlaying && audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      setIsAudioPlaying(false);
    }
    setShowSkull(false);
    setShowLove(true);
    setNoMessage(false);
  }
  
  return (
      <div>
          <div className="contentval">
        <p>{message}</p>
        <div className="nomessback">
        <p className='nomess'>{noMessage}</p>
        </div>
         <div className="btn">
          {showLove && (<div className="love"> <img src={Love} alt="" /></div>)}
          <button className='yesbtn' onClick={handleClickyes}>YES ❤️</button>
          {showSkull && (
            <div className="skull">
              <img src={Skull} alt="Skull" />
            </div>
          )}
          <button className='nobtn' onClick={handleClickno}>NO 💀</button>    
              </div>
              </div>     

    </div>
  )
}

export default VVibrate
