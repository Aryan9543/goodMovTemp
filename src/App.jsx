import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './component/Header';
// import Banner from './component/Banner';
// import AboutUs from './component/AboutUs';
// import Services from './component/Services';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <Header />
      {/* <Banner />
      <AboutUs />
      <Services/> */}
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
