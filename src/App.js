import './App.css';
import Profile from "./Components/profile";
import Skills from "./Components/skils";
import Blog from "./Components/blog";
import Hobbies from './Components/hobbies';
import Experience from './Components/experience';
import Projects from './Components/projects';


function App() {
  return (
    <div className="App">
    <Profile 
        name="Zeeshan Ahmad" 
        job="Software Developer"
        email="zeeshan22ahmad33@gmail.com" 
        phone="(+92) 346 1983670"
        description1="Self-motivated developer, who is willing to learn and create outstanding UI applications. Donec aliquam est dui, vel vestibulum diam sollicitudin id.Quisque feugiat malesuada molestie"
        description2="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."/>
    <div className="Upper" >
    <Skills />
  
    <Blog />
    </div>
    <div className="bottom">
    <Hobbies />

    <Experience />
    </div>
    <Projects />

   
   
    </div>
  );
}

export default App;
