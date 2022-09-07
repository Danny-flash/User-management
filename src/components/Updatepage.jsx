import { useState } from 'react'
import './register.css'
import { Link, useNavigate } from "react-router-dom"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { updateUsers } from '../features/usersSlice'
import { useParams } from 'react-router-dom'
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



const Updatepage = () => {

    const {userId} = useParams()
    const Usersdata = useSelector((state) => state.users.value)
  
    const user = Usersdata.find((user => user.id.toString() === userId))
      const { firstName, lastName, id, email, phone, gender,country,status, RegistrationDate } = user

    const dispatch = useDispatch()

    let navigate = useNavigate()
    const [value, setValue] = useState()


   const [newInputValues, setNewInputValues] = useState({
    id: id,  
     firstName: firstName,
     lastName: lastName,
     email: email,
     phone: phone,
     status: status,
     gender: gender,
     country: country,
     select:true,
     RegistrationDate :RegistrationDate
   })

    const handleSubmit = (e) => {
         e.preventDefault()
         dispatch(updateUsers({
             id: newInputValues.id,
             firstName: newInputValues.firstName,
             lastName: newInputValues.lastName,
             email: email,
             phone: newInputValues.phone,
             gender: newInputValues.gender,
             country: newInputValues.country,
             status: newInputValues.status,
             select: newInputValues.select,
             RegistrationDate: newInputValues.RegistrationDate
         }))
       navigate(-1)
    }

   

   const handleChange = (e) => {
           setNewInputValues({...newInputValues, [e.target.name]: e.target.value})
   }

  return (
    <section className="register-page">
    <motion.div className="register-container"
       initial="hidden"
       animate="visible"
       exit={{
        x: "-100vw",
       transition:{ ease: 'easeInOut'}
      }}
       variants={Loadvariants}
    >
         <header>
               <h1>Update User</h1>
               <p>Your are just a few clicks away from using our services</p>
         </header>


   <div className="form">

      <div className="name-sec">
          <label htmlFor="firstName"> First Name: 
               <input type="text" id='firstName'
                placeholder='Enter your new First Name'
                name='firstName'
                onChange={handleChange}
                value={newInputValues.firstName}
               />
          </label>
          <label htmlFor="lastName"> LastName:
          <input type="text" id='lastName'
             placeholder='Enter your new Last Name'
             name='lastName'
             onChange={handleChange}
             value={newInputValues.lastName}
          />
          </label>
      </div>

     <label htmlFor="email"> Email:
         <input type="email" id='email'
            placeholder='example@gmail.com'
            name='email'
            onChange={handleChange}
            value={email}
         />
     </label>

     <label htmlFor="phoneNo"> Phone Number:
     <PhoneInput
          placeholder="Enter new phone number"
          country="US"
          value={value}
          onChange={setValue}
          name='phoneNo'
          />
     </label>
   

     <label htmlFor="sex"> Gender:
      <select name="gender" id="sex" placeholder='Select Gender' onChange={handleChange}
             value={newInputValues.gender}
      >
          <option value="" className='yo'>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
          <option value="Prefer not to say">Prefer not to say</option>
      </select>
     </label>
 

          <button className='btn btn-primary' onClick={handleSubmit}>Update User</button>

   </div>

    </motion.div>
</section>
    
  )
}

export default Updatepage