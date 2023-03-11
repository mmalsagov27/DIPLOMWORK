import React from "react";
import './Fswrestling.css';
import bedro from '../image/bedro.jpg';
import progib from '../image/progib.jpg';
import prohod from '../image/prohod.webp';

const About = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row header_bg">
                    <div className="col pt5">
                        <div className="carousel-inner text-center text-white mt-md-5">
                            <div className="carousel-item active">
                                <h4 className="py-3 text-uppercase">Free-Style Wrestling</h4>
                                <p className="d-none d-sm-block">The history of the creation of Freestyle Wrestling</p>
                                <button className="btn btn-light text-light bg-dark text-uppercase">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="col text-center text-white className=bg">
                <h3 className="text-uppercase">History</h3>
                <img className="d-center d-md-block mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/8/82/2016_Summer_Olympics%2C_Men%27s_Freestyle_Wrestling_57_kg_21.jpg" />
                <p><i>Freestyle wrestling (English Freestyle wrestling, French Lutte libre) is a combat sport and an Olympic sport, which consists in a duel between two athletes according to certain rules, using various techniques (captures, throws, coups, sweeps, etc.), in in which each of the opponents is trying to put the other on the shoulder blades and win. In freestyle wrestling, in contrast to Greco-Roman and belt wrestling, captures of the opponent's legs, sweeps and active use of the legs when performing any technique are allowed. Modern freestyle wrestling is an Olympic and amateur sport.</i></p>
            </div>
            <hr/>
            <div className="container-fluid text-white">
        <div className="row">
            <div className="col">
                <h2 className="text-center text-uppercase">TRICKS</h2>
            </div>
        </div>
    
        <div className="row row-cols-3">
            <div className="col text-center">
                <img src={progib} className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Deflection</h4>
            </div>
            <div className="col text-center">
                <img src={bedro} className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Hip</h4>
            </div>
            <div className="col text-center">
                <img src={prohod} className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Transition to legs</h4>
            </div>
        </div>

    </div>

    <div class="container-fluid mt-5 pt-3 bg-dark">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="text-center">
                        <a href="#" class="btn btn-light text-light bg-dark text-uppercase">Facebook</a>
                        <a href="#" class="btn btn-light text-light bg-dark text-uppercase">Twitter</a>
                        <a href="#" class="btn btn-light text-light bg-dark text-uppercase">Instagram</a>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default About 