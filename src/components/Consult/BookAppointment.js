import { TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './bookAppointment.css'

function BookAppointment({ consult_doctor_name, set_show_appointment }) {
  return (
    <div className="bookAppointment">

      <div className="consulted_doctor_name">
        <button onClick={() => set_show_appointment(false)}> <i class="fas fa-arrow-circle-left"></i> Change Doctor</button>
        <h2>Consulting To : <span> {consult_doctor_name}</span></h2>
      </div>

      <div className="userAndpet">

        <div className="prsonal_info">
          <h3>Personal Details</h3>
          <div className="details">

            <div className="about_name">
              <form>
                <TextField id="standard-basic" label="Full Name" />
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="City" />
              </form>
            </div>
            <div className="personal_contact">
              <form >

                <TextField id="standard-basic" label="Contact No." />
                <TextField id="standard-basic" label="Address" />
              </form>
            </div>
          </div>
        </div>
        <div className="pet_info">
          <h3>Pet Details</h3>
          <div className="details">

            <div className="about_name">
              <form>
                <TextField id="standard-basic" label="Type of pet" />
                <TextField id="standard-basic" label="Gender" />
                <TextField id="standard-basic" label="Image" type="file" />
              </form>
            </div>
            <div className="personal_contact">
              <form >

                <TextField id="standard-basic" label="Age" />
                <TextField id="standard-basic" label="Medical History" />

              </form>
            </div>
            <div className="submit_information">
              <button type="submit" className="book_appointment">Book Now</button>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default BookAppointment
