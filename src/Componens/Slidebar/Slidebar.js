import React from 'react'
import './Slidebar.css'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'
export default function Slidebar() {
  return (
    <div className='sidebar'> 
        <h3 className="sidebar-title">به داشبورد خود خوش آمدید</h3>
        <div className="underline"></div>
        <ul className="sidebarr-content">
        {/* <Link to="" className="sidebar-link">
            <li className="active">
            <i className="bi bi-house"></i>
            داشبورد
            </li>
        </Link> */}
        <NavLink to="/products" className={(link)=>link.isActive?'sidebar-link active2':'sidebar-link'}>
            <i className="bi bi-bag"></i>
            محصولات
        </NavLink>
        <NavLink to='/comments' className={(link)=>link.isActive?'sidebar-link active2':'sidebar-link'}>
            <i className="bi bi-chat-left-text"></i>
                کامنت ها
        </NavLink>
        {/* <Link to="/users" className="sidebar-link">         
            <li>
            <i className="bi bi-people"></i>
             کاربران

            </li>
        </Link>
        <Link to="./purchase" className="sidebar-link">
            <li>
            <i className="bi bi-bag-check"></i>
            سفارشات
            </li>
        </Link>
        <Link to="./offers" className="sidebar-link">
            <li>
            <i className="bi bi-currency-dollar"></i>
            تخفیف ها
            </li>
        </Link> */}
        
        </ul> 
    </div>
  )
}
