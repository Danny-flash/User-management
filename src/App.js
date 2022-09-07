import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import SuccessfulPage from './components/SuccessfulPage';
import Dashboard from './components/Dashboard';
import UserDetail from './components/UserDetail';
import Updatepage from './components/Updatepage';
import Addnewuser from './components/Addnewuser';
import { AnimatePresence} from "framer-motion"


function App() {


  return (
    <div className="App">

        <Navbar />
        <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path='/' element={<Register />}></Route>
            <Route path='/successfulpage' element={<SuccessfulPage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/userdetail/:userId' element={<UserDetail />}></Route>
            <Route path='/updatepage/:userId' element={<Updatepage />}></Route>
            <Route path='/addnewuser' element={<Addnewuser />}></Route>
        </Routes>
     </AnimatePresence>
         
    </div>
  );
}

export default App;
