import React from 'react'
import './HowItWorks.css'


function HowItWorks() {
  return (
    <div className="HowItWorks">
      <h1>How Online Veterinarian Service works??</h1>
      <div className="content">
        <div className="StepsToWork">
          <div className="icons">
            <div>
              <h1>01</h1>
            </div>
            <div>
              <h1>02</h1>
            </div>
            <div>
              <h1>03</h1>
            </div>
          </div>
          <div className="steps">
            <div className="step1">
              <h3>Ask a question</h3>
              <p>Ask anything related to health, nutrition, behavior of your Pet</p>
            </div>
            <div className="step2">
              <h3>Tell us more about your pet and yourself</h3>
              <p>You can even upload photos and medical documents if you desire</p>
            </div>
            <div className="step3">
              <h3>Receive a response from veterinarian</h3>
              <p>A real Veterinarian answers your questions and/or begins LIVE chat with you</p>
            </div>
          </div>
        </div>
        <div className="Hero_img">

        </div>
      </div>
    </div>
  )
}

export default HowItWorks
