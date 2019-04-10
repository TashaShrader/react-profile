import React from "react";
import "./style.css";
import me from "../Portfolio/images/me.jpg";
function Home() {
    return (
        <div>
            <div className="home">
                <div className="row-1">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <img src={me} className="me"></img>
                    </div>



                    
                    <div className="col-xs-12 first">
                        I have been interested in the app development field for the last several years. I have taken several
                        online courses including EDX Harvard Into to Computer Programming, Treehouse, and Freecodecamp.
                        <div className="space"> </div>
                        I then decided to move forward with my career and applied to the University of Minnesota Full
                        Stack Web App Coding Bootcamp.
                        <div className="space"> </div>
                        I started in January and will be Graduated April 8th.
                        <div className="check">Check out my some of my projects in the link above!</div>
                        <div className="col-xs-12 know">
                        Full Stack Web Development Skills Include:
                        </div>
                    </div>
                </div>
     
                <div className="lists">
                    <div className="col-xs-4 col1">
                        <ul>
                            <h2>Deployment</h2>
                            <li>Heroku</li>
                            <li>Git</li>
                            <li>Github Pages</li>
                            <h2>Quality Assurance</h2>
                            <li>Writing Tests</li>
                            <h2>DataBases</h2>
                            <li>Firebase</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="lists">
                    <div className="col-xs-4">
                 
                    <ul>
                        <h2>browser based technologies</h2>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>CSS Frameworks</li>
                        (Bootstrap, Materialize)
                        <li>javaScript</li>
                        <li>jQuery</li>
                        <li>Handlebars</li>
                        <li>Cookies, Local Storage</li>
                        <li>React.js</li>
                    </ul>
                    </div>
                </div>

                <div className="lists">
                    <div className="col-xs-4 col3">
                        <ul>
                            <h2>Node.js</h2>
                            <li>Express</li>
                            <li>Security and Session Storage</li>
                            <li>User Authentication</li>
                            <li>MERN Stack</li>
                            <h2>computer Science</h2>
                            <li>Design Patterns</li>
                            <li>Algorithms</li>
                            <h2>Java</h2>
                        </ul>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default Home;