import React, { useEffect, useState } from 'react'
import "./Comments.css"
import Errorbox from '../Errorbox/Errorbox'
import DetailModal from '../DetailModal/DetailModal'
import DeleteModal from '../DeleteModal/DeleteModal'
export default function Comments() {

  const[allComments,setAllComments] = useState([])
  const[isShowDetailModal,setIsShowDetailModal] = useState(false)
  const[isShowDeleteModel,setIsShowDeleteModal] = useState(false)
  const[isShowEditModel,setIsShowEditModal] = useState(false)
  const[commnetBody,setCommentBody] = useState('')
  const[commentID,setCommentID] = useState(null)

  const GetComments =()=>{
    fetch('http://unknown88.pythonanywhere.com/accounts/comments/')
    .then(res=>res.json())
    .then(data=>setAllComments(data))
  }
  useEffect(()=>{
    GetComments()

  },[])

  function modalHidden (){
    setIsShowDetailModal(false)
  }


  const deleteModalCancel=()=>{
    setIsShowDeleteModal(false)
  }
  const deleteComment=()=>{
    fetch(`http://unknown88.pythonanywhere.com/accounts/comment/delete/${commentID}/`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
      GetComments()
      setIsShowDeleteModal(false)

    })
  }

  
  const modalEditHidden=()=>{
    setIsShowEditModal(false)
  }
  
  const modalEdit=()=>{
    let newData = {
      body: commnetBody
    }
    fetch(`http://unknown88.pythonanywhere.com/accounts/comment/update/${commentID}/`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization": 'Token 0e70a436403b6ed0ef5495a1699e1197c88c9e04'
      },
      body:JSON.stringify(newData),
      
    })
    .then(res=>res.json())
    .then(()=>{
      GetComments()
      setIsShowEditModal(false)

    })
  }

  
  
  return (
    <div>

  {allComments.length?(
        <table className='comment-table'>
          <thead>
            <tr>
              <th>نام</th>
              <th>ایمیل</th>
              <th>تاریخ/ساعت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {allComments.map(comment=>{
            return(

            <tr key={comment.id}>
              <td>{comment.user.username}</td>
              <td>{comment.user.email}</td>
              <td className='date-time'>
                <span>
                  {comment.created}
                  <i className="bi bi-calendar3"></i>

                </span>
                <span>
                  {comment.hour}
                  <i className="bi bi-clock-fill"></i>

                </span>
              </td>
              <td className='comment-btn-container'>
                <button className='btn-show' onClick={()=>{
                  setCommentBody(comment.body)
                  setIsShowDetailModal(true)
                }}>نمایش</button>
                <button className='btn-edit' onClick={()=>{
                  setCommentID(comment.id)
                  setCommentBody(comment.body)
                  setIsShowEditModal(true)
                }}>ویرایش</button>
                <button className='btn-del' onClick={()=>{
                  setIsShowDeleteModal(true)
                  setCommentID(comment.id)
                }}>حذف</button>
              </td>
            </tr>
            )
          })}

          </tbody>
        </table>
    ):(
    <Errorbox msg={'هیچ کامنتی یافت نشد'}></Errorbox>
    )
    
  } 
  <DetailModal onHide={modalHidden} action={isShowDetailModal}>
      <p>{commnetBody}</p>
  </DetailModal>

  <DetailModal onHide={modalEditHidden} action={isShowEditModel}>
      <textarea name="" id="" cols="30" rows="10" value={commnetBody} onChange={(e)=>setCommentBody(e.target.value)}></textarea>
      <button onClick={modalEdit} className='btn-edit'>ویرایش</button>
  </DetailModal>

  <DeleteModal submitAction={deleteComment} cancelAction={deleteModalCancel} action={isShowDeleteModel} title={'آيا از حذف اطمینان دازید ؟'} ></DeleteModal>
    
    


      
    </div>
  )
}
