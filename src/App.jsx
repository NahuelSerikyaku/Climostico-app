import './assets/App.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <div className='bg'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
