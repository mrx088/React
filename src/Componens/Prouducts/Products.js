import React, { useState } from 'react'
import "./Products.css"
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailModal from '../DetailModal/DetailModal'
export default function Products() {

  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const [showDetailModal,setShowDetailModal] = useState(false)

  const submitAction = ()=>{
    console.log('Submited');
    setShowDeleteModal(false)
  }

  function cancelAction(){
    console.log('Canceld');
    setShowDeleteModal(false)
  }

  const hideControler = ()=>{
    setShowDetailModal(false)
  }
  return (
    <div>
      <h3 className='head-title'>افزودن محصول جدید </h3>
      <form action="#" className='form-add-peroduct'>
        <div className="input-groups">
          <div className="input">
            <i className="bi bi-cursor-text"></i>
            <input type="text"  placeholder='اسم محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-currency-dollar"></i>
            <input type="text" placeholder='قیمت محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-image"></i>
            <input type="text" placeholder='آدرس عکس محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-star-fill"></i>
            <input type="text" placeholder='میزان محبوبیت محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-kanban"></i>
            <input type="text" placeholder='موجودی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-palette-fill"></i>
            <input type="text" placeholder='تعداد رنگ بندی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-wallet2"></i>
            <input type="text" placeholder='میزان فروش محصول را بنویسید'/>
          </div>
        </div>
        <button type="submit" className='btn'>ثبت محصول</button>
      </form>

      <table className='table-products'>
        <thead>

          <tr className='table-head-products'>
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>

          <tr className='table-row-products'>
            <td>
              <img src='/Image/about-img.jpg' alt=""  className='table-img'/>
            </td>
            <td>روغن</td>
            <td>20000 تومان</td>
            <td>26</td>
            <td className='table-button'>
              <button className='btn' onClick={()=>setShowDetailModal(true)}>جرییات</button>
              <button className='btn' onClick={()=>setShowDeleteModal(true)}>حذف</button>
              <button className='btn'>ویرایش</button>

            </td>

          </tr>
          <tr className='table-row-products'>
            <td>
              <img src='/Image/about-img.jpg' alt=""  className='table-img'/>
            </td>
            <td>روغن</td>
            <td>20000 تومان</td>
            <td>26</td>
            <td className='table-button'>
              <button className='btn' onClick={()=>setShowDetailModal(true)}>جرییات</button>
              <button className='btn' onClick={()=>setShowDeleteModal(true)}>حذف</button>
              <button className='btn'>ویرایش</button>

            </td>

          </tr>
        </tbody>
      </table>

      <Errorbox msg={'هیچ محصولی یافت نشد'}></Errorbox>
      <DeleteModal submitAction={submitAction} cancelAction={cancelAction} action={showDeleteModal}></DeleteModal>

      {showDetailModal&& <DetailModal onHide={hideControler} action={showDetailModal}></DetailModal>}
       
      

    </div>
    
  )
}
