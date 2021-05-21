import React from 'react'
import { useState } from 'react'
import { auth, provider } from '../firebase'
import '../components/navigation.css'
import { useAuthState } from 'react-firebase-hooks/auth';

function Navigation({ user }) {
  const [showNav, setShowNav] = useState(false)

  user = useAuthState(auth);
  function openSideBar() {
    setShowNav(!showNav)
  }

  function handleAuth() {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="navigation">
      <div className="nav-bar">
        <div className="logo">
          <h3>Dr.<span>Pet</span></h3>
        </div>
        <div className="links">
          <h4>Home</h4>
          <h4>Consultation</h4>
          <h4>Adoptation</h4>
        </div>
        <div className="open-sidebar">
          <button onClick={openSideBar}><i class="fas fa-chevron-circle-down"></i></button>
        </div>
      </div>
      {
        showNav ? <div className="left-bar">
          <h3>Home</h3>
          <h3>Consult us</h3>
          <h3>Services</h3>
          <h3>Contact</h3>
          <h3 onClick={handleAuth}>Login</h3>
        </div> : null
      }

    </div>
  )
}

export default Navigation
