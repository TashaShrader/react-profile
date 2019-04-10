import React from "react";
import "./style.css";
import crystal from "./images/crystal.jpg";
import wireframe from "./images/homework1.jpg";
import gify from "./images/gify.jpg";
import movie from "./images/movie.jpg";
import liri from "./images/liri.jpg";
import bamazon from "./images/bamazon.jpg";
import friendfinder from "./images/friendfinder.jpg";

function Portfolio() {
    return (
        <div>
            <div className="container">
                <div className="row-1 ">
                    <h1>Portfolio</h1>
                </div>

                <div className="row" className="clicker">
                    click on the image to view the project
                </div>

                <div className="projects">
                    <div className="row">
                        <div className="col-md-4 wireframe project"><img src={wireframe} width="250px"></img>
                            <h3>intro to html/css</h3>
                        </div>

                        <div className="col-md-4 crystal project"> <img src={crystal} width="250px"></img>
                            <h3>crystal game</h3>
                        </div>


                        <div className=" col-md-4 gify project"><img src={gify} width="250px"></img>
                            <h3>using gify api</h3>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-md-4 movie project">
                            <img src={movie} width="250px"></img>
                            <h3>movie survey</h3>
                        </div>

                        <div className="col-md-4 liri project">
                            <img src={liri} width="200px"></img>
                            <h3>liri-bot</h3>
                        </div>

                        <div className="col-md-4 bamazon">
                            <img src={bamazon} width="250px"></img>
                            <h3>bamazon</h3>
                        </div>
                    </div> 


                   <div className="row">
                        <div className="col-md-4 friend-finder project">
                            <img src={friendfinder} width="250px"></img>
                            <h3>friend finder</h3>
                        </div>
                       
                       
                    </div> 
                </div>
            </div>

        </div>
    )
}

export default Portfolio;