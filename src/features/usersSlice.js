import { createSlice } from '@reduxjs/toolkit'
import  UsersData  from "../components/Data"

const initialState = {
   value: UsersData
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
 
       addUser: ((state, action) => {
          state.value.push(action.payload)
       }),

        DeleteUsers: (state, action) => {
           state.value = state.value.map(user => user.id !== action.payload)
        },
        searchUsers: (state, action) => {
          console.log(action.payload)
          state.value = state.value.filter(user => user.firstName.toLowerCase().includes(action.payload))
        },
        updateUsers: (state, action) => {
            const {id, firstName, lastName, gender, email, status, phone, select, RegistrationDate, country } = action.payload
            const existingUser = state.value.find(user => user.id === id)
            if(existingUser){
            existingUser.id = id;
              existingUser.firstName = firstName;
              existingUser.lastName = lastName;
              existingUser.email = email;
              existingUser.phone = phone;
              existingUser.status = status;
              existingUser.gender = gender;
              existingUser.country = country;
              existingUser.select = select;
              existingUser.RegistrationDate = RegistrationDate
            }
            
        },    DeactivateUsers: (state, action) => {
         state.value = state.value.map((user) => {
            if(user.id === action.payload){
               return {...user, status: !user.status}
               console.log(user.status)
            }else return
         })

      }
      ,    showButton: (state, action) => {
         state.value = state.value.map((user) => {
            if(user.id === action.payload){
               return {...user, showButton: !user.showButton}
            }else return
         })

      }
       
    },
  })
  
  export const { addUser, DeleteUsers, searchUsers, updateUsers, DeactivateUsers, showButton } = usersSlice.actions
  export default usersSlice.reducer