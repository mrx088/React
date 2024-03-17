import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./DetailModal.css"
 
export default function DetailModal({data,action,onHide}) {
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
                <div>
                    <h3>محبوبیت</h3>
                    <small>{data.popularity}%</small>
                </div>
                <div>
                    <h3>تعداد فروش</h3>
                    <small>{data.sale}</small>
                </div>
                <div>
                    <h3>تعداد رنگ ها</h3>
                    <small>{data.colors}</small>
                </div>

            </div>
        </div>
  ,document.getElementById('modal-container'))
}
