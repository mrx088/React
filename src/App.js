import { Routes } from './Routes';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Slidebar from './Componens/Slidebar/Slidebar';
function App() {
  let router = useRoutes(Routes)
  return (

    <>
    <div className='container'>

      <Slidebar></Slidebar>
      <div className="main">
        <div className="main-head">

          <div className="user-container">
            <i className="bi bi-list hamberger"></i>
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





    <div className="sidebar-phone">
      <div className="close-slider">
        <i className="bi bi-x"></i>
        
      </div>
        <ul>
          <li>
            <i className="bi bi-house"></i>
            <a href="" className="">داشبورد</a>

          </li>
          <li>
            <i className="bi bi-bag"></i>
            <a href="" className="">محصولات</a>


          </li>
          <li>
            <i className="bi bi-plus-lg"></i>
            <a href="" className="">اضاقه کردن</a>


          </li>
          <li>
            <i className="bi bi-chat-dots"></i>
            <a href="" className="">درخواست ها</a>


          </li>
          <li>
            <i className="bi bi-gear"></i>
            <a href="" className="">تنظیمات</a>


          </li>
          <li>
            <i className="bi bi-info-circle"></i>
            <a href="" className="">راهنما</a>


          </li>
        </ul>


    </div>
    
    </>

      
  );
}

export default App;
