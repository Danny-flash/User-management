import { useState } from 'react'
import './register.css'
import { Link, useNavigate } from "react-router-dom"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { addUser } from '../features/usersSlice'
import { useSelector, useDispatch } from 'react-redux'



const Register = () => {
    const dispatch = useDispatch()
    const Usersdata = useSelector((state) => state.users.value)
  const [disable, setDisable ] = useState(true)

    let navigate = useNavigate()
    const [value, setValue] = useState("")
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
       
          dispatch(addUser(inputValues))
            navigate('successfulpage')
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
    }

   

   const handleChange = (e) => {
           setInputValues({...inputValues, [e.target.name]: e.target.value})
   }


  return (

    <section className="register-page">
          <div className="register-container">
               <header>
                     <h1>Register with Us</h1>
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
                      required
                     />
                </label>
                <label htmlFor="lastName"> LastName:
                <input type="text" id='lastName'
                   placeholder='Enter your Last Name'
                   name='lastName'
                   onChange={handleChange}
                   value={inputValues.lastName}
                   required
                />
                </label>
            </div>

           <label htmlFor="email"> Email:
               <input type="email" id='email'
                  placeholder='example@gmail.com'
                  name='email'
                  onChange={handleChange}
                  value={inputValues.email}
                  required
               />
           </label>
   
           <label htmlFor="phone"> Phone Number:
           <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={value}
                onChange={setValue}
                name='phone'
                required
                />
           </label>
         

           <label htmlFor="sex"> Gender:
            <select name="gender" id="sex" placeholder='Select Gender' onChange={handleChange}
                   value={inputValues.gender}
                   required
            >
                <option value="" className='yo'>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>
           </label>
       

                <button className='btn btn-primary' onClick={handleSubmit}>Register</button>

               <p className='login-link'> Already have an account? <Link to="/">Log in</Link></p>
         </div>








          </div>
    </section>
  )
}

export default Register