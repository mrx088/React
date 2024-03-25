import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import './MobileNav.css'

export default function MobileNav({show,onHide}) {
  return ReactDOM.createPortal(
    <div className={`mobile ${show?'active':''}`}>
        <div className='mobile-head'>
            <i class="bi bi-x-lg" onClick={()=>onHide()}></i>
        </div>
        <div className='mobile-body'>
            
        <NavLink onClick={()=>onHide()} to="/products" className={(link)=>link.isActive?'sidebar-link active2':'sidebar-link'}>
                <i className="bi bi-bag"></i>
                محصولات
        </NavLink>
        <NavLink onClick={()=>onHide()} to='/comments' className={(link)=>link.isActive?'sidebar-link active2':'sidebar-link'}>
                <i className="bi bi-chat-left-text"></i>
                    کامنت ها
        </NavLink>
        </div>
    
    </div>
  ,document.querySelector('.mobile-slider'))
}
