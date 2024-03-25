import { Routes } from './Routes';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Slidebar from './Componens/Slidebar/Slidebar';
import MobileNav from './Componens/MobileNav/MobileNav';
import { useState } from 'react';
function App() {
  let router = useRoutes(Routes)
  const[ShowMobileSlidebar,setShowMobileSlidebar] = useState(false)

  const HiddenMobileSlider = ()=>{
    setShowMobileSlidebar(false)
  }
  return (

    <>
    <div className='container'>

      <Slidebar></Slidebar>
      <div className="main">
        <div className="main-head">

          <div className="user-container">
            <i className="bi bi-list hamberger" onClick={()=>setShowMobileSlidebar(preval=>!preval)}></i>
            <div className="user-img-card">
            <div className="user-img"></div>
            </div>
            <div className="user-info">
              <h4>Ali Yousefi</h4>
              <h5>Backend&Frontend</h5>
            </div>
          </div>
  
          <div className="control-container">
            <div className="search-bar">
              <input type="text" placeholder="جستسجو کنید ...."/>
              <button>‌جسنجو</button>
            </div>
            <i className="bi bi-bell"></i>
            <i className="bi bi-moon"></i>
          </div>
        </div>
        <div className="Routes">
          {router}

        </div>
      </div>
    </div>





    <MobileNav show={ShowMobileSlidebar} onHide={HiddenMobileSlider}></MobileNav>

    
    </>

      
  );
}

export default App;
