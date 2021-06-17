import React from 'react'
import './Adopt.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from '@material-ui/core';

function Adopt() {
  var url = "https://api.petfinder.com/v2/animals?type=dog&page=1";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJJOFNMU3FXTEF0eDVVSFN1aWpKYXI0MXNsVzdRNWNXRnVyd1ZNbkRhYlZ5WDROMTNCQyIsImp0aSI6IjlkOWNmNDU0ZDNjZTJhZjM0MTUwNzZiNjM1ZjQ0M2QyMmU4OGZmZmYzNDA1N2JlOTYxMzdjZWE5MjhiZWNlMThjNGUzNGUyZjc0ZDk5ZDBhIiwiaWF0IjoxNjIyNTQ3NDA4LCJuYmYiOjE2MjI1NDc0MDgsImV4cCI6MTYyMjU1MTAwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.JlSpXRJ9OfTrAFrkFxZr1o36QvhUmExoz_TUrsFCLfMy0c7Om5kMjhwr6QdENOnnUcVZRD-z6mNk2gBvK3RRMGcZpuxWYKL2Al2O6QFvqJFjqTDRbon4OekxakVwopTdKHAz1QLK1_F3B2YB73SNhXr1So9wPoPX_PX5q8OjfjmLKmlXWszkQ9h8HceTvwIW0Z84Ima8LCAHO5BW3W2sW73P6_wqmZqRW42nQqXk0Ws86810rMgOoWBhZAPWLuF2vWjTWR0FLjYHzns5msMfHgWGBRh3QgJZXQBbKyqbcRnKHNDr2aKz-XTQmX8_LuUCOjzPYzzxfPNByAN_qU6-bA");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.send();


  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://api.thedogapi.com/v1/breeds').then((data) =>
  //     data.json()).then(dogs => setData(dogs))
  // }, [])

  // console.log(data);

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


      {/* {
        data && data.slice(0, 20).map((dog) => (
          <div>
            <h3>{dog.name}</h3>
            <p>{dog.life_span}</p>
            <p>{dog.temperament}</p>
            <img src={dog.image.url} alt={dog.name} height="300px" style={{ objectFit: "contain" }} />
          </div>
        ))
      } */}
    </div>
  )
}

export default Adopt
