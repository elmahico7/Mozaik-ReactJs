import React, { useState } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Header = () => {
    const styles = {
        fadeInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    const [navbar, setNavbar] = useState(false);
    const [logo, setLogo] = useState(false);
    const [icon, setIcon] = useState(false);
    const changeIcon = () => {
        if ('menu-icon') {
            let x = document.getElementById("slideout-menu");
            if (x.style.display === "block") {
                x.style.display = "none";
                setIcon(false);
            } else {
                x.style.display = "block";
                setIcon(true);
            }
        }   
    }
    const changeBackground = () => {
        if (window.scrollY >= 96) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    const changeLogo = () => {
        if (window.scrollY >= 96) {
            setLogo(true);
        } else {
            setLogo(false);
        }
    }
    window.addEventListener('scroll', changeLogo);
    const scrollTop = () =>{
        window.scrollTo({top: 900, behavior: 'smooth'});
     };
    return (
            <header>      
              <div id="slideout-menu">
               <ul> 
                     <li>
                         <a href="/">Accomodations</a>
                     </li>
                     <li>
                         <a href="/">Facilities</a>
                     </li>
                     <li>
                         <a href="/">Offers</a>
                     </li>
                     <li>
                         <a href="/">Location</a>
                     </li>
                     <li>
                         <a href="/">Gallery</a>
                     </li>
                     <li>
                         <a href="/">Contact</a>
                     </li>
                  </ul>
              </div>
              <div className={navbar ? 'navbar active' : 'navbar'}>
                    <div className={logo ? 'logo active' : 'logo'}>   
                        </div>         
                            <button className="book-nav">Book Now</button>
                                <div id="menu-icon">
                                    <i className={icon ? 'fa fa-times' : 'fa fa-bars'} onClick={changeIcon} ></i>
                                </div>
                                    <ul>                                
                                        <li>
                                            <a href="/">Accomodations</a>
                                        </li>
                                        <li>
                                            <a href="/">Facilities</a>
                                        </li>
                                        <li>
                                            <a href="/">Offers</a>
                                        </li>
                                        <li>
                                            <a href="/">Location</a>
                                        </li>
                                            <li>
                                             <a href="/">Gallery</a>
                                            </li>
                                        <li>
                                            <a href="/">Contact</a>
                                        </li>
                                        <li>
                                            <button className="book">Book Now</button>
                                        </li>
                                   </ul>
                 </div>
                    <div className="lorem">
                        <StyleRoot>
                         <div className="title" style={styles.fadeInUp}>
                            <div>Your Winter</div>
                            <div>Destination</div>
                        </div>
                        </StyleRoot>
                            <div className="subtitle">                 
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="arrow">
                               <i className="fa fa-arrow-down" onClick={scrollTop}></i>
                            </div>
                    </div>
            </header>
    )
}

export default Header;