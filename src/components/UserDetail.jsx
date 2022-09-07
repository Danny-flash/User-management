import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./userdetail.css"
import {Link, NavLink} from 'react-router-dom'
import { MdKeyboardArrowLeft} from 'react-icons/md';
import { motion } from 'framer-motion';

const Loadvariants = {
  hidden: { 
    x: "150vw"
  },
  visible: { 
    x: "0vw",
     transition: {
          type: "spring",
          duration: 0.5
     }
  }
}



const UserDetail = () => {

  const {userId} = useParams()
  const Usersdata = useSelector((state) => state.users.value)

  const user = Usersdata.find((user => user.id.toString() === userId))
    const { firstName, lastName, id, email, phone, gender,country,status, RegistrationDate } = user

  return (
    <motion.section className='dashboard detail'
    initial="hidden"
    animate="visible"
    exit={{
     x: "-100vw",
    transition:{ ease: 'easeInOut'}
   }}
    variants={Loadvariants}
    >
       <div className="dash-link detail-dash" >
       {/*<NavLink to="/dashboard">User Management</NavLink>*/}
       </div>

       <div className="details-page">
       <div className="navigate-back">
           <Link to="/dashboard"><MdKeyboardArrowLeft /></Link>
          <p>View User Record</p>
       </div>
           <div className="detail-page-header">
              <p>Info</p>
              <p>Activites</p>
           </div>

           <div className="detail-body">
               <div className="detail-body-left">
                    <div className="detail-info">
                        <p>First Name</p>
                        <p>{firstName}</p>
                    </div>
                    <div className="detail-info">
                        <p>Last Name</p>
                        <p>{lastName}</p>
                    </div>
                    <div className="detail-info">
                        <p>Email</p>
                        <p>{email}</p>
                    </div>
                    <div className="detail-info">
                        <p>Country</p>
                        <p>{country}</p>
                    </div>
                    <div className="detail-info">
                        <p>phone No:</p>
                        <p>{phone}</p>
                    </div>
                    <div className="detail-info">
                        <p>Gender</p>
                        <p>{gender}</p>
                    </div>
               </div>
               <div className="detail-body-right">
               <div className="detail-info">
                        <p>Status</p>
                        <p className={status ? "activee" : "inactive"}>{status ? "Active" : "Inactive"}</p>
                    </div>
                    <div className="detail-info">
                        <p>Registration Date</p>
                        <p>{RegistrationDate}</p>
                    </div>
               </div>
           </div>
       </div>
       
        
    </motion.section>
  )
}

export default UserDetail