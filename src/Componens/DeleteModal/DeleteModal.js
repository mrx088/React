import React from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'

export default function DeleteModal({submitAction,cancelAction,action}) {
    return ReactDOM.createPortal (
        <div className={`modal-cont ${action?"active":''}`}>
            <div className='del-modal'>
            <h3>ایا از حذف اطمینان دارید ؟</h3>
            <div className="del-btns">
                <button className='btn btn-accept' onClick={()=>submitAction()}>بله</button>
                <button className='btn btn-reject' onClick={()=>cancelAction()}>خیر</button>
            </div>
            </div>
        </div>
  ,document.getElementById('modal-container'))
}


