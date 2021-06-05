import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurServices from './components/OurServices/ourServices';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Adopt from './components/Adopt/Adopt';
import Consult from './components/Consult/Consult';
import Login from './components/Authentication/Login';
import BookAppointment from './components/Consult/BookAppointment';
import AddDoctor from './components/Consult/AddDoctor';


function App() {

  return (


    <div className="App">
      <Router>
        <Switch>

          <Route path='/consultus'>
            <Navigation />
            <Consult />
          </Route>


          <Route path='/bookappointment'>
            <Navigation />
            <BookAppointment />
          </Route>

          <Route path='/adddoctor'>
            <Navigation />
            <AddDoctor />
          </Route>


          <Route path='/login'>
            <Navigation />
            <Login />
          </Route>

          <Route path='/adopt'>
            <Navigation />
            <Adopt />
          </Route>

          <Route path='/'>
            <Navigation />
            <MainPage />
            <OurServices />
            <Home />
            <Services />
          </Route>




        </Switch>

        <Footer />
      </Router>

    </div>




  );
}

export default App;
