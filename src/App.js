import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import MainPage from './components/mainPage/MainPage';
import OurServices from './components/OurServices/ourServices';

function App() {

  return (


    <div className="App">
      <Navigation />
      <MainPage />
      <OurServices />
      <Home />
      <Services />



      <Footer />

    </div>




  );
}

export default App;
