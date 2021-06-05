import React from 'react'
import './Consult.css'
import DoctorCard from './DoctorCard'


function Consult() {

  // const [randomUser, setRandomUser] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=2').then((data) =>
  //     data.json()).then(user => setRandomUser(user.results))
  // }, [])

  // console.log(randomUser);

  return (
    <div className="consult_container">
      <h2>Consult With Highly Experience Vets</h2>
      <div className="select_category">
        <div className="location">
          <i class="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Indore" />
        </div>
        <div className="doctor_type">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for doctor type" />
        </div>
        <div className="prime">
          <p>Fed up of endless wait?</p>
          <p>Look for clinic with<span>Prime <i class="fas fa-award"></i></span></p>
        </div>
      </div>
      <div className="filters">

      </div>

      <div className="doctor_info">
        <DoctorCard />
        <div className="location_info">
          <h3>Provide current location to see Dentist near you</h3>
          <p>You are seeing results from Shivpuri. See results near you</p>
          <div className="areas">
            <p>Hsr Layout </p>
            <p>White field </p>
            <p>Indiranagar </p>
            <p>Sarjapur Road </p>
            <p>Marathahalli</p>
          </div>
          <button><i class="fas fa-map-marker-alt"></i> Current Location</button>
        </div>
      </div>

    </div>
  )
}

export default Consult
