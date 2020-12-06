import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="menu">
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
            <div className="copyright">
               <p>2020 Mozsaik. All rights reserved</p> 
            </div>
        </div>
    )
}

export default Footer;