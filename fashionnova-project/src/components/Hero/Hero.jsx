import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/girl.PNG'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <p>cute outfits for everyone!</p>
            <Link to='/women' style={{textDecoration : "none"}}>
                <div className="hero-latest-btn">
                    <div>Latest Trends</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </Link>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero