import "../Style/projects.css";
import Project from "./project";



const projects = () => {


    return (
        <div className="Project_wrapper">
            <div className="filters">
                <h3>Projects (7)</h3>
                <button >React</button>
                <button>Javascript</button>
                <button>Android</button>
                <button>Java</button>
                <button>Electron</button>
                <button>Python</button>
                <button>Wordpress</button>
            </div>

            <div className="projects react">
                <Project />
                <Project />
                <Project />
                
            </div>

            <div className="filter">
                <button>{">>"}</button>
                <button>{">"}</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>{"<"}</button>
                <button>{"<<"}</button>
            </div>
            
        </div>
    )
}

export default projects
