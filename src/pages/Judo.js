import React from "react";
import './Judo.css';

const Products = ()=>{
    return(
        <div>
            <div className="container-fluid">
                <div className="row header_bg2 ">
                    <div className="col pt5">
                        <div className="carousel-inner text-center text-white mt-md-5">
                            <div className="carousel-item active text-black">
                                <h4 className="py-3 text-uppercase">Judo</h4>
                                <p className="d-none d-sm-block">The history of the creation of Judo</p>
                                <button className="btn btn-light text-light bg-dark text-uppercase">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="col text-center text-white className=bg">
                <h3 className="text-uppercase">History</h3>
                <img className="d-center d-md-block mx-auto" src="https://fergana.agency/siteapi/media/images/7e4b1d32-0ad6-4371-9ce3-73571c911480.jpeg" />
                <p><i>Judo (jap. 柔道 ju: do:, literally - “The soft way”; in Russia, the translation option “Flexible way” is also often used) is a Japanese martial art, philosophy and martial arts without weapons, created at the end of the 19th century on the basis of jujutsu by Japanese martial arts master Jigoro Kano (Jap. 嘉納 治五郎 Kano: Jigoro: 1860 - 1938), who also formulated the basic rules and principles of training and competition.</i></p>
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
                <img src='https://sportishka.com/uploads/posts/2021-11/1637991807_1-sportishka-com-p-podkhvat-dzyudo-krasivie-sportivnie-foto-1.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Pickup</h4>
            </div>
            <div className="col text-center">
                <img src='https://m-a-s.club/wp-content/uploads/2021/09/1614677984_69-p-fon-dzyudo-74-scaled.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Hip</h4>
            </div>
            <div className="col text-center">
                <img src='http://goremykin.com/wp-content/uploads/2017/08/%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%B4%D0%B7%D1%8E%D0%B4%D0%BE.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Throw</h4>
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

export default Products