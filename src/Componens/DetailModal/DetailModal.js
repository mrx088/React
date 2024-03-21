import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./DetailModal.css"
 
export default function DetailModal({data,action,onHide,children}) {
    useEffect(()=>{


        const keyHandeler = (e)=>{
            if(e.keyCode===27){
                onHide()
            }

        }

        if (action){

            window.addEventListener('keydown',keyHandeler)
        }
      return ()=>{
        window.removeEventListener('keydown',keyHandeler)
      }
    })
  return  ReactDOM.createPortal(    
        <div  className={`modal-cont ${action?"active":''}`}>
            <div className='detail-modal'>
                {children}
                <button className='close-btn' onClick={onHide}>بستن</button>
            </div>
        </div>
  ,document.getElementById('modal-container'))
}
