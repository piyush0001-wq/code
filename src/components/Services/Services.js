import React from 'react'
import './services.css'
function Services() {
  return (
    <div className="Services">
      <h2>Get the answers you need, right when you need them</h2>
      <p>Consult with expert vets having more than 5+ years of experience</p>
      <div className="service_box">
        <div className="service01">
          <div className="img"></div>
          <h3>Pet Health</h3>
          <p>Consult an online veterinary doctor for medical treatments and services. Pet-health is our priority, but to treat them professionally, keeping our best hands at service is our highest priority.</p>
        </div>
        <div className="service02">
          <div className="img"></div>
          <h3>Pet Behaviour </h3>
          <p>Talk to vet online and know more about your pet behavior. Our expertise allows us to provide you with the best advice and remedies to deal with your pet swinging mood or any kind of unexpected behavior.</p>
        </div>
        <div className="service03">
          <div className="img"></div>
          <h3>Pet Training Advice</h3>
          <p>Almost every pet, especially dogs, needs training. But, you cannot blindly trust your pet into the hands of anyone randomly. We brief you about the best training programs & let you decide what is perfect for your pet.</p>
        </div>
        <div className="service04">
          <div className="img"></div>
          <h3>Second Opinion</h3>
          <p>Second thoughts crossing your minds over an already ongoing treatment for your pet? We are there to help you out. Contact our veterinary doctor online for a second opinion and get relieved from the worrying thoughts.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
