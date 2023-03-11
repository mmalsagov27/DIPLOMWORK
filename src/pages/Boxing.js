import React from 'react'
import './Boxing.css';
 
 
export const FlagsPage = () => { 
    return ( 
        <div className='container4'> 
                
                <div className="container-fluid">
                <div className="row header_bg4">
                    <div className="col pt5">
                        <div className="carousel-inner text-center text-white mt-md-5">
                            <div className="carousel-item active text-white">
                                <h4 className="py-3 text-uppercase">BOXING</h4>
                                <p className="d-none d-sm-block">The history of the creation of Box</p>
                                <button className="btn btn-light text-light bg-dark text-uppercase">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                
                <hr/>
            <div className="col text-center text-white className=bg">
                <h3 className="text-uppercase">History</h3>
                <img className="d-center d-md-block mx-auto" src="https://world-sport.org/files/uploads/sport/box.webp" />
                <p><i>Boxing (from French boxe - "boxing" and boxeur - "boxer", which come from English to box - "fight in the ring", "to box", or directly from English boxing, to box, apparently occurring from English box - "box", "box", "ring") - a contact sport, martial arts in which athletes strike each other with their fists, usually in special gloves. The referee controls the fight, which lasts up to 12 rounds.</i></p>
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
                <img src='https://fiteria.ru/images/aperkot-1.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Uppercut</h4>
            </div>
            <div className="col text-center">
                <img src='https://fight.ru/wp-content/uploads/2020/03/dzheb-v-bokse.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Jab</h4>
            </div>
            <div className="col text-center">
                <img src='https://mma.metaratings.ru/upload/sprint.editor/954/954ab86af66abaf99fbccb539863f59d.jpg' className="img-thumbail w-75 rounded-circle" alt="..."/>
                <h4>Сross</h4>
            </div>
            <div class="container-fluid mt-5 pt-3 bg-dark">
            <div class="row row-cols-1">
                <div class="col">
                    <div class="text-center">
                        <a href="#" class="btn btn-light text-light bg-dark text-uppercase">Facebook</a>
                        <a href="#" class="btn btn-light text-light bg-dark text-uppercase">Twitter</a>
                        <a 
                        href="#" class="btn btn-light text-light bg-dark text-uppercase">Instagram</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        </div> 
    ) 
} 
 
export default FlagsPage