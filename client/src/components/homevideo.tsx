import "../styles/homestyles.css"

interface videoProps {
    vidLink: string;
}

const Homevideo = ({vidLink}: videoProps) => {

    return (
        <div >
            <iframe className="homeVideo" src={vidLink} />
        </div>
        

    )
}

export default Homevideo