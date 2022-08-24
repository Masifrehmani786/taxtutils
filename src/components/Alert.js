import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Alert(props) {
   const Capatilize =(word)=>{
   const lower=word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1);
   }
  return (
    <div>
     { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {Capatilize(props.alert.msg)}mmmmm jjkkkk {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
    </div>
  )
  }
