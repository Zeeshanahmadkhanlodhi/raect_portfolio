import pic from '../images/image'
import '../Style/profile.css'





const profile = (props) => {
  
    return (

        <div className="profile" >
            <div className="user_image">
            <img src={pic} alt="Profile" />
            </div>
            
            <div className="profile_intro" >
                <div className="user_info">
                    <div className="left">
                        <span id="name"> {props.name} </span> <br />
                        <span>{props.job}</span>
                    </div>
                    <div className="right">
                        <span>{props.email}</span> <br />
                        <span>{props.phone}</span>
                    </div>

                </div>
                <div className="user_introduction" >
                    <p> {props.description1} </p>

                     <p> {props.description2} </p>
                </div>
            
            </div>
            
           
        </div>
    )
}

export default profile
