import "../Style/experience.css"
import exper from '../images/developer.png';

const experience = () => {
    return (
        <div className="exp">
            <h2>Experience</h2>
            <div className="exp1">
                <div>
                    <img src={exper} />
                </div>
                <div>
                    <h5>April-2018    April-2019</h5>
                    <h3>Web Developer</h3>
                    <p>loream ajsf asufa aubas gausga guas auga
                        asgjbasg jasbgas gaubgas guasg asubgas guas
                        agbasg a usgas gjuasbg asjgbasgasugas guag 
                        agbjasg ajasbgas gjbas gjasb asgjgjaga ajasbgas
                    </p>
                </div>

            </div>
            <hr />

            <div className="exp1">
                <div>
                    <img src={exper} />
                </div>
                <div>
                    <h5>April-2019    April-2021</h5>
                    <h3>Software Developer</h3>
                    <p>loream ajsf asufa aubas gausga guas auga
                        asgjbasg jasbgas gaubgas guasg asubgas guas
                        agbasg a usgas gjuasbg asjgbasgasugas guag 
                        agbjasg ajasbgas gjbas gjasb asgjgjaga ajasbgas
                    </p>
                </div>

            </div>
        </div>
    )
}

export default experience
