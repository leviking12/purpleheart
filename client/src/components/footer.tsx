import "../styles/footerstyles.css"
import spotifyLogo from '../assets/spotify.png';
import youtubeLogo from '../assets/youtube.png';



const Footer = () => {
    return (
        <div className="footerDiv">
            <a className="footerLogo" href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                <img src={spotifyLogo} alt="spotify" />
            </a>
            <a className="footerLogo" href="https://www.youtube.com/@officialtanaagnb7278" target="_blank" rel="noopener noreferrer">
                <img src={youtubeLogo} alt="youtube" />
            </a>

        </div>
    )
}

export default Footer