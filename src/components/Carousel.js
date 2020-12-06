import React, { Component } from 'react';
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import room1 from '../img/room1.jpg';
import room2 from '../img/room2.jpg';
import room3 from '../img/room3.jpg';
 
class Carousel extends Component {
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            arrows: false,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            pauseOnHover: false
        };
        return (
            <div>
              <Slider {...settings}>
                      <div className="cards imgs">
                         <div className="card">
                             <div className="card-image">
                             <img src={room1} alt=""/>
                             </div>
                             <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                             </div>
                         </div>
                        <div className="card">
                            <div className="card-image">    
                                <img src={room2} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                            <img src={room3} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards imgs">
                         <div className="card">
                             <div className="card-image">
                             <img src={room3} alt=""/>
                             </div>
                             <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                             </div>
                         </div>
                        <div className="card">
                            <div className="card-image">    
                                <img src={room2} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                            <img src={room1} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards imgs">
                         <div className="card">
                             <div className="card-image">
                             <img src={room1} alt=""/>
                             </div>
                             <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                             </div>
                         </div>
                        <div className="card">
                            <div className="card-image">    
                                <img src={room3} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                            <img src={room2} alt=""/>
                            </div>
                            <div className="card-content">
                                <h3>Single Room</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="/" className="view">View Room</a>
                            </div>
                        </div>
                    </div>
              </Slider>
           </div>
          );
}
}
export default Carousel;
