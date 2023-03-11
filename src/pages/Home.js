import React from "react";
import { useSelector } from "react-redux";
import AddPost from "../component/AddPost"
import './Home.css';

const Home = ()=>{
    const postsArray = useSelector(state=>state.posts)

    console.log(postsArray)


    return(
        <div>
            <div className="container-fluid">
                <div className="row header_bg3">
                    <div className="col pt5">
                        <div className="carousel-inner text-center text-white mt-md-5">
                            <div className="carousel-item active text-black">
                            <h4 className="py-3 text-uppercase">Eagle Kazakhstan</h4>
                                <button className="btn btn-light text-light bg-dark text-uppercase">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container-fluid text-white">
        <div className="row">
            <div className="col">
            <h2 className="d-none d-sm-block">Welcome to the martial arts club!</h2>
                <h3 className="text-center text-uppercase">Our Sections</h3>
            </div>
        </div>
    
        <div className="row row-cols-3">
            <div className="col text-center">
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/82/2016_Summer_Olympics%2C_Men%27s_Freestyle_Wrestling_57_kg_21.jpg'  className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Free-style Wrestling</h4>
            </div>
            <div className="col text-center">
                <img src='https://fergana.agency/siteapi/media/images/7e4b1d32-0ad6-4371-9ce3-73571c911480.jpeg'  className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Judo</h4>
            </div>
            <div className="col text-center">
                <img src='https://fiteria.ru/images/aperkot-1.jpg'  className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Boxing</h4>
            </div>
        </div>
        <div class="contact-page">
                <h2>We can be contacted using the contact details below.</h2>
                <div class="contact-info">
                    <div class="item">
                        <i class="icon home"></i>
                        Kazakhstan, Astana
                    </div>
                    <div class="item">
                        <i class="icon phone"></i>
                        +7 776 006 06 06
                    </div>
                    <div class="item">
                        <i class="icon mail"></i>
                        EagleKazakhstan@inbox.ru
                    </div>
                    <div class="item">
                        <i class="icon clock"></i>
                        We work seven days a week from 9:00 to 18:00.
                    </div>
                    <form action="" class="contact-form">
                    </form>
                    <input type="text" class="textb" placeholder="Name"/>
                    <input type="mail" class="textb" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" class="tnp" value="Submit"/>
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
    </div>    
            
    )
}

export default Home