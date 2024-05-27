import React from 'react'
import quoteup from './assets/quoteup.png';
import quotedown from './assets/quotedown.png';


const Landing = () => {
  return (
    <div class="landing">
      <div className="quote-container">
        <img src={quoteup} alt="Quote up" />
        <div className="quote-text">
          <p class="line-1">When tech meets creativity, the impossible starts to become...</p>
          <p class="achievable">ACHIEVABLE</p>

        </div>
        <img src={quotedown} alt="Quote up" />
      </div>


      <div class="more-button-container">
        <a href="">Find Out More</a>
      </div>
    </div>

  )
}

export default Landing
