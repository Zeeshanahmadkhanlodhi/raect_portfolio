import "../Style/hobbies.css";
import run from "../images/running.jpg";
import travel from '../images/travelling.jpeg';


const hobbies = () => {
    return (
        <div className="hobbies" >
            <h2>Hobbies</h2>
            <div className="running">
                <figure>
                    <img src={run} alt="Running" /> 
                    <h3>Running</h3>
                    <span>loream lorea, afas afa</span>
                </figure>

            </div>

            <div className="travelling">
                <figure>
                    <img src={travel} alt="travel" /> 
                    <h3>Travelling</h3>
                    <span>loream lorea, afas afa</span>
                </figure>

            </div>
          
        </div>
    )
}

export default hobbies
