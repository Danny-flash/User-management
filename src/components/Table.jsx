import React, { useEffect, useState } from 'react'
import './table.css'
import { useSelector, useDispatch } from 'react-redux'
import { BsThreeDots, BsThreeDotsVertical} from 'react-icons/bs';
import { FaRegTrashAlt} from 'react-icons/fa';
import { FiEdit} from 'react-icons/fi';
import { showButton } from '../features/usersSlice'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';

const modalvariants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
   opacity: 1,
     transition: {
          type: "spring",
          duration: 1
     }
  }
}
const Loadvariants = {
  hidden: { 
    x: "150vw",
    opacity:0 
  },
  visible: { 
    x: "0vw",
    opacity: 1,
     transition: {
          type: "spring",
          duration: 0.5
     }
  }
}
const buttonvariants = {
  hidden: { 
    x: "10vw",
    opacity:0 
  },
  visible: { 
    x: "0vw",
    opacity: 1
  }
}


const Table = () => {

    const Usersdata = useSelector((state) => state.users.value)
    const [users, setUsers] = useState(Usersdata)

    const [showButtons, setShowButtons] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [singleButtonId, setSingleButtonId] = useState(null)

    const dispatch = useDispatch()
   
    const handleShowAction = (id) => {
        setSingleButtonId(id)
        setShowButtons(!showButtons)
    }
    const handleDelete = (id) => {
     const newData = users.filter(user => user.id !== id)
        setUsers(newData)
        setShowButtons(false)
    }

  const handleDeactivate = (id) => {
      const newUsers = users.map((user, index) => {
        if(user.id === id){
          return {...user, status: !user.status}
        }else return
      })
      setUsers(newUsers)
      setShowButtons(!showButtons)
  }
   
  return (
    <div className="table-responsive ">
      
  <table className="table table-borderless p-5">
  <thead>
    <tr className='bg-transparent'>
      <th scope="col">All</th>
      <th scope="col">S/N</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Status</th>
      <th scope="col">Gender</th>
      <th scope="col">Country</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='t-body'>
     {
        users.length === 0 ? (<p className='no-users'>No user data</p>): (
          users.map((user, index) => (
            <motion.tr key={index}
              initial={{opacity: 0, translateX: -50}}
              animate={{opacity: 1, translateX: 0}}
              transition= {{duration: 0.3, delay: index * 0.2}}
            >
              <td><div className="cntr">
      <input checked={user.checked} type="checkbox" id="cbx" className="hidden-xs-up" 
       onChange={(e) => {
           let checked = e.target.checked
           setUsers(
            users.map(u =>{
              if (user.id === u.id){
                  user.select = true
              }
              return user
            })
           )
       }}
      />
      <label htmlFor='cbx' className="cbx"></label>
    </div></td>
              <td scope='row'>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status ? "Active" : "Inactive"}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>
                  {
          singleButtonId === user.id && 
                                         showButtons ? (<button className='btn-ico' 
                    onClick={() => handleShowAction(user.id)}
                   ><BsThreeDotsVertical className='btn-icon'/></button>) : (<button className='btn-ico' 
                   onClick={() => handleShowAction(user.id)}
                  ><BsThreeDots className='btn-icon'/></button>)
                  }{
                     singleButtonId === user.id && 
                    showButtons && (
                      <motion.div className="button-group"
                      initial={"hidden"}
                      animate={"visible"}
                      transition={{staggerChildren: 0.15}}
                      variants={buttonvariants}
                      >
                      <Link to={`/userDetail/${user.id}`}>
                      <motion.button className='btn-primary'
                         variants={buttonvariants}
                      >View</motion.button>
                      </Link>
                      <Link to={`/updatepage/${user.id}`}>
                      <motion.button className='btn-primary'
                         variants={buttonvariants}
                      >
                         <FiEdit className='btn-ic'/>
                        Update</motion.button>
                      </Link>
                      <motion.button className=''
                         onClick={() => handleDeactivate(user.id)}
                         variants={buttonvariants}
                      >Deactivate</motion.button>
                      <motion.button className='btn-danger' 
                          onClick={() => handleDelete(user.id)}  
                          variants={buttonvariants}    ><FaRegTrashAlt className='btn-ic'/> Delete</motion.button>
                      {
                             showModal && 
                             <motion.div className='modal-container'
                             onClick={() => setShowModal(false)}
                             initial="hidden"
                             animate="visible"
                             exit={{
                              x: "-100vw",
                             transition:{ ease: 'easeInOut'}
                            }}
                             variants={modalvariants}
                             >
                                   <motion.div className="sub-modal">
                                    <h2>Delete User?</h2>
                                      <p>Deleting a user will permanently remove the user from the system</p>
                                       <div className="flex-btn">
                                       <button
                                        onClick={() => setShowModal(false)}
                                      >keep user</button>
                                      <button className='btn-danger' 
                       onClick={() => handleDelete(user.id)}
                      ><FaRegTrashAlt className='btn-ic'/> Delete</button>
                                       </div>
                                   </motion.div>
                             </motion.div>
                        }
                      </motion.div>
                    )
                  }
                </td>
            </motion.tr>
          ))
        )
     }
  </tbody>
</table>
</div>
  )
}

export default Table