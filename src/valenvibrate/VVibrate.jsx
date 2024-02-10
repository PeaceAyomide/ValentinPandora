import React from 'react'
import './VVibrate.css'

const VVibrate = () => {

    const handleClick = () => {
        if ("vibrate" in navigator) {
          navigator.vibrate(500); // Vibrate for 200ms
        } else {
          console.log("Vibration API not supported");
        }
      };

    
  return (
      <div>
          <div className="contentval">
              <p>Peace will you be my Valentine</p>
              <div className="btn">
              <button className='yesbtn'>YES ❤️</button>
              <button className='nobtn' onClick={handleClick}>NO 💀</button>    
              </div>
              </div>     

    </div>
  )
}

export default VVibrate