import "../Style/project.css"
import pic from "../images/react.png"

const project = () => {
    return (
        <div className="project">
            <div className="image">
                <img src={pic} id="project__image" title="project" />
            </div>

            <div className="intro">
                 
            <h3>Project 1</h3>
            <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
            </div>
           
            <div className="btn">
                <button className="demo__btn">Demo</button>
                <button>Code</button>
            </div>
       
        </div>
    )
}

export default project
