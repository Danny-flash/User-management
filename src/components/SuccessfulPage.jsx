import React, { useEffect } from 'react'
import './successful.css'
import {useNavigate } from "react-router-dom"
import success from "../assets/success.svg"

const SuccessfulPage = () => {
  let navigate = useNavigate()
    
  useEffect(()=> {
    setTimeout(() => {
      navigate('/dashboard')
 }, 2000)

  },[])

  return (
    <section>
         <div className="successful-page">
            <header>Your account has been created successfully</header>

            <div class="spinner">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
             
             <img src={success} alt="" className='success-img'/>

           <aside>Please wait while we redirect you...</aside>
         </div>
    </section>
  )
}

export default SuccessfulPage