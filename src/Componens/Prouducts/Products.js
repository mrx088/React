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


  const[newTitle,setNewTitle] = useState('')
  const[newCount,setNewCount] = useState('')
  const[newColors,setNewColors] = useState('')
  const[newSale,setNewSale] = useState('')
  const[newPrice,setNewPrice] = useState('')
  const[newPopularity,setNewPopularity] = useState('')

  
  useEffect(()=>{

    GetProducts()
  },[])

  const GetProducts= ()=>{

    fetch('http://unknown88.pythonanywhere.com/products/')
    .then(res=>res.json())
    .then(data=>setAllProducts(data))
  }


  const submitAction = ()=>{
    fetch(`http://unknown88.pythonanywhere.com/product/delete/${id}`,{
      method:'DELETE'
    }).then(res=>res.json())
    .then(()=>{
      GetProducts()
      setShowDeleteModal(false)
    })
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

    fetch(`http://unknown88.pythonanywhere.com/product/${id}/`,{
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



  const CreateProduct = (e)=>{
    e.preventDefault()
    let NewProduct = {
      title:newTitle,
      price:Number(newPrice),
      count:Number(newCount),
      popularity:Number(newPopularity),
      colors:Number(newColors),
      sale:Number(newSale),
    }

    fetch('http://unknown88.pythonanywhere.com/product/create/',{
      method:"POST",
      headers :{
        'Content-Type':'application/json'
      },
      body : JSON.stringify(NewProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      EmptyInputs()
      GetProducts()
    })
  }


  function EmptyInputs(){
    setNewTitle('')
    setNewCount('')
    setNewColors('')
    setNewSale('')
    setNewPrice('')
    setNewPopularity('')

  }
  return (
    <div>
      <h3 className='head-title'>افزودن محصول جدید </h3>
      <form action="#" className='form-add-peroduct' onSubmit={(e)=>CreateProduct(e)}>
        <div className="input-groups">
          <div className="input">
            <i className="bi bi-cursor-text"></i>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='اسم محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-currency-dollar"></i>
            <input type="text" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)} placeholder='قیمت محصول را بنویسید'/>
          </div>
          {/* <div className="input">
            <i className="bi bi-image"></i>
            <input type="file" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} accept="image/jpeg,image/png,image/gif" placeholder='آدرس عکس محصول را بنویسید'/>
          </div> */}
          <div className="input">
            <i className="bi bi-star-fill"></i>
            <input type="text"  value={newPopularity} onChange={(e)=>setNewPopularity(e.target.value)} placeholder='میزان محبوبیت محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-kanban"></i>
            <input type="text"  value={newCount} onChange={(e)=>setNewCount(e.target.value)} placeholder='موجودی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-palette-fill"></i>
            <input type="text"  value={newColors} onChange={(e)=>setNewColors(e.target.value)} placeholder='تعداد رنگ بندی محصول را بنویسید'/>
          </div>
          <div className="input">
            <i className="bi bi-wallet2"></i>
            <input type="text"  value={newSale} onChange={(e)=>setNewSale(e.target.value)} placeholder='میزان فروش محصول را بنویسید'/>
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
                    <img src={product.image?(`http://unknown88.pythonanywhere.com/${product.image}`):("./Image/empty.jpg")} alt=""  className='table-img'/>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} تومان</td>
                  <td>{product.count}</td>
                  <td className='table-button'>
                    <button className='btn' onClick={()=>{
                      setPrimaryProduct(product)
                      setShowDetailModal(true)
                      }}>جرییات</button>
                    <button className='btn' onClick={()=>{
                      setID(product.id)
                      setShowDeleteModal(true)
                      }}>حذف</button>
                    <button className='btn' onClick={()=>EditHandeler(product)}>ویرایش</button>
      
                  </td>
    
                </tr>
  
              )
  
            })
          ):(
            <tr>

              <td>
                
                <Errorbox msg={'هیچ محصولی یافت نشد'}></Errorbox>
              </td>
            </tr>

          )}

        </tbody>
      </table>

      <DeleteModal title={"ایا از حذف اطمینان دارید ؟"} submitAction={submitAction} cancelAction={cancelAction} action={showDeleteModal}></DeleteModal>

      {showDetailModal&& 
      <DetailModal data={primaryProduct} onHide={hideControler} action={showDetailModal}>
        
                <div>
                    <h3>محبوبیت</h3>
                    <small>{primaryProduct.popularity}%</small>
                </div>
                <div>
                    <h3>تعداد فروش</h3>
                    <small>{primaryProduct.sale}</small>
                </div>
                <div>
                    <h3>تعداد رنگ ها</h3>
                    <small>{primaryProduct.colors}</small>
                </div>
        
      </DetailModal>}
      
      
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
                        <i className="bi bi-currency-dollar"></i>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-kanban"></i>
                        <input type="text" onChange={(e)=>setCount(e.target.value)} value={count}/>

                    </div>
                    {/* <div className="input-container">
                        <i className="bi bi-cursor-text"></i>
                        <input type="file" accept="image/jpeg,image/png,image/gif" />

                      </div> */}
                    <div className="input-container">
                        <i className="bi bi-star-fill"></i>
                        <input type="text" onChange={(e)=>setPopularity(e.target.value)} value={popularity}/>

                    </div>
                    <div className="input-container">
                        <i className="bi bi-palette-fill"></i>
                        <input type="text" onChange={(e)=>setColors(e.target.value)} value={colors}/>

                    </div>
                    <div className="input-container">
                      <i className="bi bi-wallet2"></i>
                        <input type="text" onChange={(e)=>setSale(e.target.value)} value={sale}/>

                    </div>
                    <button className='edit-btn' onClick={()=>submitEdit()}>EDIT</button>


            </form>


      </EditModal>
      
       
      

    </div>
    
  )
}
