import React from 'react';
import Home from './component/Home';
import Weather from './component/Weather';
import Error from './component/Error';
import HomeLink from './component/Homelink';
// import WeatherLink from './component/WeatherLink';
import {Switch,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <HomeLink/>
      
      <Switch>
        <Route exact path='/' component={Home} />
        
            <Route exact path="/weather" component={Weather} />
            <Route component={Error} />
          
        
      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;
