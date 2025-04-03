import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import "./styles/universalstyles.css"


function App() {

return (
    <div>
        <Navbar />
        <Outlet />
    </div>
)}

export default App
