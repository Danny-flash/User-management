import Lightmode from "./Lightmode"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="nav-container">
           <p className="logo">
                LOGO
            </p>    
            <Lightmode />
        </div>  
    </nav>
  )
}

export default Navbar