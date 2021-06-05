import React from 'react'
import { useState } from 'react'
import '../components/navigation.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import { Button, FormHelperText, TextField } from '@material-ui/core';
import { motion } from 'framer-motion';




function getModalStyle() {


  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },


}));


function Navigation() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [sidebar, setSideBar] = useState(false);




  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>

      <h2 id="simple-modal-title">{login ? "Login" : "Sign Up"}</h2> <br />

      {
        login ? (
          <FormControl>
            <TextField id="filled-basic" type="email" label="Emial" variant="filled" /> <br />
            <TextField id="filled-basic" type="password" label="Password" variant="filled" /> <br />

            <FormHelperText id="my-helper-text" style={{ fontWeight: "bold", color: "black" }}>We care about your privacy.</FormHelperText> <br />
            <Button variant="contained" color="primary">Login</Button>

          </FormControl>
        ) : (
          <FormControl>
            <TextField id="filled-basic" type="email" label="Emial" variant="filled" /> <br />
            <TextField id="filled-basic" type="text" label="User Name" variant="filled" /> <br />
            <TextField id="filled-basic" type="text" label="City " variant="filled" /> <br />
            <TextField id="filled-basic" type="number" label="Contact Number" variant="filled" /> <br />
            <TextField id="filled-basic" type="password" label="Password" variant="filled" /> <br />

            <FormHelperText id="my-helper-text" style={{ fontWeight: "bold", color: "black" }}>We care about your privacy.</FormHelperText> <br />
            <Button variant="contained" color="primary" >Sign Up</Button>

          </FormControl>
        )
      }


      <p onClick={() => setLogin(!login)} style={{ fontWeight: "bold", color: "black", textAlign: "center", padding: "15px 0", cursor: "pointer" }}>{login ? "Create an account here" : "Already have an account? login"}</p>
    </div>
  );


  return (
    <div className="navigation">
      <div className="nav-bar">
        <Link to='/' className="link">
          <div className="logo">
            <h3>Dr.<span>Pet</span></h3>
          </div>
        </Link>
        <div className="links">
          <Link to='/' className='link'>
            <h4>Home</h4>
          </Link>
          <Link to='/consultus' className="link">
            <h4>Consultation</h4>
          </Link>
          <Link to='/adopt' className="link">
            <h4>Adoptation</h4>
          </Link>

        </div>
        <div className="open-login">
          <p onClick={handleOpen}><i class="fas fa-user-circle"></i></p>
        </div>

        <div className="open-sidebar">
          <p onClick={() => setSideBar(!sidebar)}><i class="fas fa-bars"></i></p>
        </div>
      </div>

      {
        sidebar && (<motion.div className="sidebar"
          initial={{ x: "20vh" }}
          animate={{ x: 0 }}>
          <Link className="link" to='/consultus'>
            <p>Consult</p>
          </Link>
          <Link className="link" to='/adopt'>
            <p>Adopt</p>
          </Link>
          <Link className="link" to='/'>
            <p>Contact</p>
          </Link>

          <p>Login</p>


        </motion.div>)
      }


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default Navigation
