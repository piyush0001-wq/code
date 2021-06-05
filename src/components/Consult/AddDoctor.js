import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

import './addDoctor.css'
function AddDoctor() {

  const [name, set_doc_name] = useState('');
  const [contact_no, set_contact_no] = useState();
  const [specialization, set_specialization] = useState('');
  const [experience, set_experience] = useState();
  const [image, set_image] = useState('');
  const [description, set_description] = useState('');

  function handleAddDoctor(e) {
    e.preventDefault();
    const postDoctorData = {
      name,
      contact_no,
      specialization,
      experience,
      image,
      description
    }
    console.log(postDoctorData)

    axios.post('https://veterinarysystem.vaishnavib03.repl.co/api/doctor/register', postDoctorData)
      .then(response => {
        console.log(response)
        console.log(response.data.success)
        if (response.data.success === true) {
          alert("Added!!")

        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="addDoctor">
      {/* <h1>Add Doctor</h1> */}

      <form noValidate autoComplete="off" onSubmit={handleAddDoctor}>

        <TextField id="standard-basic" label="Doctor Name" onChange={(e) => set_doc_name(e.target.value)} />

        <TextField id="standard-basic" label="Specialization" onChange={(e) => set_specialization(e.target.value)} />

        <TextField id="standard-basic" label="Experience" type="number" onChange={(e) => set_experience(e.target.value)} />

        <TextField id="standard-basic" label="Contact" type="number" onChange={(e) => set_contact_no(e.target.value)} />

        <TextField id="standard-basic" label="Image " type="text" onChange={(e) => set_image(e.target.value)} />

        <TextField id="standard-basic" label="Description" onChange={(e) => set_description(e.target.value)} />

        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>

      </form>
    </div>
  )
}

export default AddDoctor
