import React, { useEffect, useState } from 'react'
import "./Comments.css"
import Errorbox from '../Errorbox/Errorbox'
export default function Comments() {

  const[allComments,setAllComments] = useState([])

  const GetComments =()=>{
    fetch('http://127.0.0.1:8000/accounts/comments/')
    .then(res=>res.json())
    .then(data=>setAllComments(data))
  }
  useEffect(()=>{
    GetComments()

  },[])
  return (
    <div>

  {allComments.length?(
        <table className='comment-table'>
          <thead>
            <tr>
              <th>نام</th>
              <th>ایمیل</th>
              <th>کامنت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {allComments.map(comment=>{
            return(

            <tr>
              <td>{comment.user.username}</td>
              <td>{comment.user.email}</td>
              <td>{comment.body}</td>
              <td className='comment-btn-container'>
                <button className='btn-show'>نمایش</button>
                <button className='btn-edit'>ویرایش</button>
                <button className='btn-del'>حذف</button>
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


      
    </div>
  )
}
