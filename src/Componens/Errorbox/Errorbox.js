import React from 'react'
import "./Errorbox.css"

export default function Errorbox({msg}) {
  return (
    <div className='error-continer'>
      {msg}
    </div>
  )
}
