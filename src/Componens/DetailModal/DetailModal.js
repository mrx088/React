import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./DetailModal.css"
 
export default function DetailModal({action,onHide}) {
    useEffect(()=>{


        const keyHandeler = (e)=>{
            console.log(e);
            if(e.keyCode===27){
                onHide()
            }

        }

        if (action){

            window.addEventListener('keydown',keyHandeler)
        }
        console.log("M");
      return ()=>{
        console.log('unmounted');
        window.removeEventListener('keydown',keyHandeler)
      }
    })
  return  ReactDOM.createPortal(    
        <div  className={`modal-cont ${action?"active":''}`}>
            <div className='detail-modal'>
                <div>
                    <h3>محبوبیت</h3>
                    <small>91</small>
                </div>
                <div>
                    <h3>تعداد فروش</h3>
                    <small>65</small>
                </div>
                <div>
                    <h3>عدم رضایت</h3>
                    <small>50</small>
                </div>

            </div>
        </div>
  ,document.getElementById('modal-container'))
}
