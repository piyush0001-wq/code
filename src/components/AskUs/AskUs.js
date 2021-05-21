import React from 'react'
import './AskUs.css'

function AskUs() {
  return (
    <div className="askUs">
      <div className="form">

        <h2>Ask a Vet Questions Online Now</h2>

        <h4>Verified pet experts standing by 24/7</h4>

        <p>Need advice but don’t have a veterinarian you can speak with? We’ve got you covered.</p>

        <div className="inputs">

          <textarea name="question_form" placeholder="Ask a question..." cols="50" rows="3"></textarea>

          <input type="file" />

          <select name="select category" >
            <option value="Select Category">Select Category</option>
            <option value="Health">Health</option>
            <option value="Behavior & training">Behavior & training</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Care">Care</option>
            <option value="Breed">Breed</option>
            <option value="other">other</option>
            <option value="Not Sure">Not Sure</option>
          </select>
          <button >Submit</button>
        </div>

      </div>
      <div className="hero_image">
        <img src="https://www.jing.fm/clipimg/detail/39-398080_armistead-avenue-veterinary-h-veterinary-doctor-symbol.png" alt="hero image" />
      </div>
    </div>
  )
}

export default AskUs
