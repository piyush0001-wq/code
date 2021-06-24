import React from 'react'
import './Adopt.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from '@material-ui/core';

function Adopt() {
  // https://api.thedogapi.com/v1/breeds


  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://veterinarysystem.vaishnavib03.repl.co/api/petAdopt').then((data) =>
      data.json()).then(pets => setData(pets.data))
  }, [])

  console.log(data);

  return (
    <div className="adopt_container">
      <div className="adopt_banner">
        <div className="bannerContent">
          <h1>Ready to find a new best friend?</h1>
          <p>When you adopt love, you’re changing their life and yours.</p>
          <p>Make a difference for a homeless pet and bring love home.</p>
          <Button variant="contained" color="primary" >
            Find Now
          </Button>
        </div>
      </div>

      <div className="pet_categories">
        <div className="pet_location">
          <i class="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Search Location" />
        </div>
        <div className="searchDog" onClick={() => alert(`showing dog`)}>
          <i class="fas fa-dog"></i>
          <h3>Find a dog</h3>
        </div>
        <div className="searchCat">
          <i class="fas fa-cat"></i>
          <h3>Find a cat</h3>
        </div>
        <div className="findOther">
          <select name="findOther" >
            <option value="other">Find other pets</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
            <option value="rat">Rat</option>
          </select>
        </div>
      </div>

      <div className="pets">

        {
          data && data.map((pet) => (
            <div className="pet_card">
              <div className="pet_image">
              </div>
              <div className="info">
                <h3>Name : {pet.name}</h3>
                <p><span>Age :</span> {pet.age}</p>
                <p><span>Type : </span>{pet.breed}</p>
                <p><span>Breed : </span>{pet.type}</p>
                <p>{pet.description.substring(0, 40) + '......'}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Adopt
