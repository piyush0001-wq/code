import { Link } from 'react-router-dom'
import React from 'react'
import './home.css'
import HowItWork from './HowItWorks/HowItWorks'

function Home() {


  return (



    <div className="home">

      <div className="banner">

        <div className="left_hero">
          <div className="container">
            <h1>Looking for a trainer?</h1>
            <p>Get the results you always wanted by taking your pet to the nearest dog training centre.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className="center_hero">
          <div className="container">
            <h1>Consult Senior Vets 24/7</h1>
            <p>Consult with Highly Experienced Veterinary Doctors 24/7 within 30 Minutes.</p>
            <Link to="/consultus" className="link">
              <button>See how</button>
            </Link>
          </div>
        </div>
        <div className="right_hero">
          <div className="container">
            <h1>Planning to Adopt a Pet?</h1>
            <p>Answer a few quick questions to see your perfect pet matches </p>
            <Link to="/adopt" className="link">
              <button>Find match</button>
            </Link>
          </div>

        </div>
      </div>

      <HowItWork />

    </div>
  )
}

export default Home
