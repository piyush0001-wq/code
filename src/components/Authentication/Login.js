import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './login.css'

function Login() {

  const [name, setName] = useState('');
  const [email, setmail] = useState('');
  const [username, setuserName] = useState('');
  const [contact_no, setContact] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(true)

  function handleSignUp(e) {
    console.log("signing up");
    e.preventDefault();
    const postData = {
      name,
      username,
      email,
      city,
      contact_no,
      password
    }
    axios.post('https://veterinarysystem.vaishnavib03.repl.co/api/register', postData)
      .then(response => {
        console.log(response)
        console.log(response.data.success)
        if (response.data.success === true) {
          alert("signed up!!")
          setLogin(true)
        }
      })
      .catch(error => {
        console.log(error)
        setError("unable to sign up, try again!")
      })


  }

  function handleToggle() {
    setLogin(!login);
    setSignUp(!signUp)
  }

  return (
    <div className="authentication_container">
      <div className="illustration"></div>
      <div className="main">
        {
          login ? (<div className="login">
            {/* <form >

              <input type="text" placeholder="Email" /> <br />
              <input type="texpassword" placeholder="Password" /> <br />
              <p className="error">{error}</p>
            </form> */}
            <button type="submit">login</button>
          </div>) : (
            <div className="register">
              <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /> <br />

                <input type="mail" placeholder="Mail Id" name="mail" value={email} onChange={(e) => setmail(e.target.value)} required /> <br />

                <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setuserName(e.target.value)} required /> <br />

                <input type="text" placeholder="City" name="city" value={city} onChange={(e) => setCity(e.target.value)} required /> <br />

                <input type="number" placeholder="Contact Number" name="contact_no" value={contact_no} onChange={(e) => setContact(e.target.value)} required /> <br />

                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />

                <p className="error">{error}</p>
              </form>
              <button type="submit" >SignUp</button>
            </div>
          )
        }
        <hr />

        <div className="toggle_buttons">
          <button onClick={handleToggle}>{login ? "Sign Up " : "Already have an account? log in"}</button>
        </div>



      </div>


    </div>
  )
}

export default Login
