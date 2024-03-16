import React, { useEffect, useState } from 'react'
import "./Products.css"
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailModal from '../DetailModal/DetailModal'
import EditModal from '../EditModal/EditModal'
export default function Products() {

  const [showDeleteModal,setShowDeleteModal] = useState(false)
  const [showDetailModal,setShowDetailModal] = useState(false)
  const [showEditModal,setShowEditModal] = useState(false)
  const [allProducts,setAllProducts] = useState([])
  const [primaryProduct,setPrimaryProduct] = useState(null)

  const[id,setID]= useState('')
  const[title,setTitle]= useState('')
  const[price,setPrice]= useState('')
  const[count,setCount]= useState('')
  const[popularity,setPopularity]= useState('')
  const[colors,setColors]= useState('')
  const[sale,setSale]= useState('')
  const[image,setImage]= useState('')





  useEffect(()=>{

    GetProducts()
  },[])

  const GetProducts= ()=>{

    fetch('http://127.0.0.1:8000/products/')
    .then(res=>res.json())
    .then(data=>setAllProducts(data))
  }


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


  const EditHandeler = (product)=>{
    setPrimaryProduct(product)
    setID(product.id)
    setTitle(product.title)
    setColors(product.colors)
    setSale(product.sale)
    setPopularity(product.popularity)
    setImage(product.image)
    setPrice(product.price)
    setCount(product.count)
    setShowEditModal(true)


  }

  const submitEdit = ()=>{

    let data = {
      title:title,
      price:Number(price),
      // image:image,
      popularity:Number(popularity),
      count:Number(count),
      colors:Number(colors),
      sale:Number(sale)
    }

    fetch(`http://127.0.0.1:8000/product/${id}/`,{
      method : 'PUT',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json)
    .then(data=>{
      GetProducts()
      setShowEditModal(false)

    })

  }
  const cancelEdit= ()=>{
    console.log('EDit Canceld');
    setShowEditModal(false)
  }
  return (
    <div>
      <h3 className='head-title'>افزودن محصول جدید </h3>
      <form action="#" className='form-add-peroduct'>
        <div className="input-groups">
          <div className="input">
            <i className="bi bi-cursor-text"></i>
            <input type="text"   placeholder='اسم محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-currency-dollar"></i>
            <input type="text" placeholder='قیمت محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-image"></i>
            <input type="file" accept="image/jpeg,image/png,image/gif" placeholder='آدرس عکس محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-star-fill"></i>
            <input type="text"  placeholder='میزان محبوبیت محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-kanban"></i>
            <input type="text"  placeholder='موجودی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-palette-fill"></i>
            <input type="text"  placeholder='تعداد رنگ بندی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-wallet2"></i>
            <input type="text"  placeholder='میزان فروش محصول را بنویسید'/>
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
          {allProducts.length?(
            
            allProducts.map(product=>{
              return(
                <tr key={product.id} className='table-row-products'>
                <td>
                  <img src={`http://127.0.0.1:8000/${product.image}`} alt=""  className='table-img'/>
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
                <td className='table-button'>
                  <button className='btn' onClick={()=>setShowDetailModal(true)}>جرییات</button>
                  <button className='btn' onClick={()=>setShowDeleteModal(true)}>حذف</button>
                  <button className='btn' onClick={()=>EditHandeler(product)}>ویرایش</button>
    
                </td>
    
                </tr>
  
              )
  
            })
          ):(

          <Errorbox msg={'هیچ محصولی یافت نشد'}></Errorbox>
          )}

        </tbody>
      </table>

      <DeleteModal submitAction={submitAction} cancelAction={cancelAction} action={showDeleteModal}></DeleteModal>

      {showDetailModal&& <DetailModal onHide={hideControler} action={showDetailModal}></DetailModal>}
      
      
      <EditModal data={primaryProduct} action={showEditModal}>

            <form action="" onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className="form-header">
                        <h3 >Edit This Product</h3>
                        <i className="bi bi-x-lg" onClick={cancelEdit}></i>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setCount(e.target.value)} value={count}/>

                    </div>
                    {/* <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="file" accept="image/jpeg,image/png,image/gif" />

                    </div> */}
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setPopularity(e.target.value)} value={popularity}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setColors(e.target.value)} value={colors}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="text" onChange={(e)=>setSale(e.target.value)} value={sale}/>

                    </div>
                    <button className='edit-btn' onClick={()=>submitEdit()}>EDIT</button>


            </form>


      </EditModal>
      
       
      

    </div>
    
  )
}
