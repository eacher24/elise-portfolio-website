import React from 'react'
import quoteup from './assets/quoteup.png';
import quotedown from './assets/quotedown.png';


const Landing = () => {
  return (
    <div class="landing">
      <div className="quote-container">
        <img src={quoteup} class="up-quote" alt="Quote up" />
        <div className="quote-text">
          <p class="line-1">When tech meets creativity, the impossible starts to become...</p>
          <p class="achievable">achievable</p>

          <div class="more">
            <a href="">Find Out More</a>
          </div>

        </div>
        <img src={quotedown} class="down-quote" alt="Quote up" />

      </div>





    </div>

  )
}

export default Landing
