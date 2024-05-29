import React from 'react'
import hexagonal from './assets/hexagonal.png';
import profile from './assets/profile.png';


const Hero = () => {

  return (
    <div class="hero">
      <div className="hero-cont">
        <div className="cont-1">
          <img src={hexagonal} class="hexagonal" alt="hexagonal" />

        </div>




        <div className="cont-2">
          <div className="text">
            <h1>Hi, I'm Elise...</h1>
            <h3>web developer</h3>
            <h5>Freelancer by day with a passion for bringing ideas to life
              through the power of tech.</h5>

          </div>
           <div className="ext-links">
            <a class ="button" href="https://github.com/eacher24">Github     &#8599; </a>
            <a class = "button" href="">Resume     &#8599; </a>
           </div>

        </div>

        <div className="cont-3">
        <img src={profile} class="profile" alt="profilephoto" />


        </div>
      </div>











    </div>



  )
}

export default Hero
