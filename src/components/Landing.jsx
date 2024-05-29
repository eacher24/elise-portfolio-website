import React from 'react'
import quoteup from './assets/quoteup.png';
import quotedown from './assets/quotedown.png';
import chevron from './assets/chevron-down-regular-24.png';
// import Typewriter from "typewriter-effect";



const Landing = () => {
  return (
    <div class="landing">
      <div className="quote-container">
        <img src={quoteup} class="up-quote" alt="Quote up" />
        <div className="quote-text">
          <p class="line-1">When tech meets creativity, the impossible starts to become...</p>
          {/* <Typewriter
            class = "achievable"
            onInit={(typewriter) => {
              typewriter
              .typeString('<span class="typewriter-text">achievable</span>')
              .pauseFor(1000)
              .start()
            }} /> */}

          <p class="typewriter-text">achievable</p>




          <div class="more">
            <a href="">Find Out More</a>

            <img src={chevron} class=""/>
          </div>

        </div>
        <img src={quotedown} class="down-quote" alt="Quote up" />

      </div>





    </div>

  )
}

export default Landing
