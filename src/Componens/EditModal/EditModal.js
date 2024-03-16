import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './EditModal.css'
export default function EditModal({children,action}) {

    return ReactDOM.createPortal (
        <div className={`modal-cont ${action?'active':''}`}>
            <div className="edit-modal">

                {children}
                
            </div>
        </div>
  ,document.getElementById('modal-container'))
}
