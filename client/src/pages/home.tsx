import Homevideo from "../components/homevideo"
import "../styles/homestyles.css"

const Home = () => {

    return (
        <div className="home">
            <h1 className="homeHeader">New Music</h1>
            <Homevideo vidLink="https://www.youtube.com/embed/2qV1lsv4T5A?si=TANdhilKF_ONkUPS" />
        </div>

    )
}

export default Home