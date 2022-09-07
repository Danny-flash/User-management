import { useState } from 'react'
import './register.css'
import { Link, useNavigate } from "react-router-dom"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { addUser } from '../features/usersSlice'
import { useSelector, useDispatch } from 'react-redux'
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

const Addnewuser = () => {
    const dispatch = useDispatch()
    const Usersdata = useSelector((state) => state.users.value)

    let navigate = useNavigate()
    const [value, setValue] = useState()
    const [inputValues, setInputValues] = useState({
    id: Usersdata[Usersdata.length - 1].id + 1,  
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
     status: true,
     gender: "",
     country: "",
     select:true,
     RegistrationDate : new Date().getDate()
   })

    const handleSubmit = (e) => {
         e.preventDefault()
         console.log(inputValues)
         dispatch(addUser(inputValues))
         setInputValues({
          id: 8,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          status: true,
          gender: "",
          country: "",
          select:true,
          RegistrationDate : new Date().getDate()
        })
        navigate(-1)
    }

   

   const handleChange = (e) => {
           setInputValues({...inputValues, [e.target.name]: e.target.value})
   }


  return (
    <motion.section className="register-page"
    initial="hidden"
    animate="visible"
    exit={{
     x: "-100vw",
    transition:{ ease: 'easeInOut'}
   }}
    variants={Loadvariants}

    >
          <div className="register-container">
               <header>
                     <h1>Add New User</h1>
                     <p>Your are just a few clicks away from using our services</p>
               </header>

     
         <div className="form">
     
            <div className="name-sec">
                <label htmlFor="firstName"> First Name: 
                     <input type="text" id='firstName'
                      placeholder='Enter your First Name'
                      name='firstName'
                      onChange={handleChange}
                      value={inputValues.firstName}
                     />
                </label>
                <label htmlFor="lastName"> LastName:
                <input type="text" id='lastName'
                   placeholder='Enter your Last Name'
                   name='lastName'
                   onChange={handleChange}
                   value={inputValues.lastName}
                />
                </label>
            </div>

           <label htmlFor="email"> Email:
               <input type="email" id='email'
                  placeholder='example@gmail.com'
                  name='email'
                  onChange={handleChange}
                  value={inputValues.email}
               />
           </label>
   
           <label htmlFor="phoneNo"> Phone Number:
           <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={value}
                onChange={setValue}
                name='phoneNo'
                />
           </label>
         

           <label htmlFor="sex"> Gender:
            <select name="gender" id="sex" placeholder='Select Gender' onChange={handleChange}
                   value={inputValues.gender}
            >
                <option value="" className='yo'>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
           </label>
       

                <button className='btn btn-primary' onClick={handleSubmit}>Add New User</button>

              
         </div>








          </div>
    </motion.section>
    
  )
}

export default Addnewuser