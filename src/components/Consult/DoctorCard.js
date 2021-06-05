import { useState, useEffect } from 'react'
import './DoctorCard.css'
function DoctorCard() {


  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch('https://veterinarysystem.vaishnavib03.repl.co/api/doctor/register').then((data) =>
      data.json()).then(user => setDoctor(user.doctor))

  }, [])


  return (
    <div >
      {
        doctor.map((doc, id) => (
          <div className="doctor_card">

            <div key={id} className="contact">
              <p>{doc.contact_no}</p>
              <p>example@gmail.com</p>
            </div>
            <div className="image">
              <img src={doc.image} alt={doc.name} />
            </div>
            <hr />
            <div className="name">
              <h2 >{doc.name}</h2>
              <p>{doc.specialization}</p>
            </div>
            <div className="bottom">
              <div className="description">
                <p>{doc.description}</p>
              </div>
              <div className="appointment">
                <button >Book Appoinment</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DoctorCard
