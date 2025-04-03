import { Link } from "react-router-dom"
import "../styles/navstyles.css"

const Navbar = () => {

    return (
        <div className="body">
            <h1 className="navHeader">Tana</h1>
            <ul className="navList">
               <Link to={"/home"}>Home</Link>
               <Link to={"/music"}>Music</Link>
               <Link to={"/merch"}>Merch</Link>
            </ul>
            
        </div>

    )
}

export default Navbar