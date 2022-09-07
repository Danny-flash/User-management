import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAddCircleOutline} from 'react-icons/io';
import { BiFilter} from 'react-icons/bi';
import { BsSearch} from 'react-icons/bs';
import "./dashboard.css"
import Table from './Table';
import { useSelector, useDispatch } from 'react-redux'
import { searchUsers } from '../features/usersSlice'
import { Link } from 'react-router-dom';
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





const Dashboard = () => {
  const Usersdata = useSelector((state) => state.users.value)
  const [users, setUsers] = useState(Usersdata)
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

   const handleChange = (e) => {
       setSearch(e.target.value)
   }
  

  return (
    <section className='dashboard'>
       <div className="dash-link">
       <NavLink to="/dashboard">User Management</NavLink>
       </div>
        <motion.div className="dash-container"
               initial="hidden"
               animate="visible"
               exit={{
                x: "-100vw",
               transition:{ ease: 'easeInOut'}
              }}
               variants={Loadvariants}
          
        >
             <div className="dash-cont-fluid">
             <div className="top-dash">
              <p>All Users</p>
              <Link to="/addnewuser"> <button className=" btn btn-primary"><IoMdAddCircleOutline className='ic'/>Add New User</button></Link>
             </div>
             </div>

             <div className="mid-dash">
                <div className="select-check-left">
                <input type="checkbox" 
                      id='select'
                    />
                    <label htmlFor="select">Select</label>
                </div>
                <div className="filter-opt">
                       <button className=" btn btn-primary transparent"><BiFilter className='ic ico'/>Filter by country</button>

                       <div className="search">
                        <input type="text"
                         placeholder='Search'
                         value = {search}
                         onChange = {handleChange}
                        />
                        <BsSearch className='search-icon'/>
                       </div>
                       <button className="btn btn-primary transparenty"
                        onClick={() => dispatch(searchUsers(search))
                            
                        }
                       >Search</button>
                </div>
             </div>

                    <Table />

        </motion.div>
    </section>
  )
}

export default Dashboard