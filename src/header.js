import React from 'react';
import './header.css'


function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("adel")
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    console.log("asma")
}


const Header = () => <div className="barredenavgation">
<div className="header">
        <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
        <div  className="toggleIcon">
            <a className="fa fa-bars toggle" onClick={openNav} aria-hidden="true"></a>
        </div>
        <div id="myNav" className="overlay">
        <img  className="logo-docplanner1"  src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
            <a className="fa fa-times closebtn" onClick={closeNav}></a>
            <div className="overlay-content">
                <a href="#">About us</a>
                <hr/>
                <a href="#">Carrer</a>
                <hr/>
                <a href="#" className="disabled">Departments</a>
                <a href="#" className="space">Marketting & PR</a>
                <a href="#">Customer Sucees & Sales</a>
                <a href="#">IT, Product, Design & UX</a>
                <a href="#">Finance & Administration</a>
                <a href="#">HR & more</a>
            </div>
        </div>
        <ul className="navLinks">
            <li>
                <a href="#" className="specialcolor">About Us</a>
            </li>
            <li>
                <a hreft="#">Carrer</a>
            </li>
            <li>
                
                <div className="dropdown">
                    <a href="#" className="dropdownLink">Departments</a>
                    <div className="dropdown-content">
                        <a href="#">Marketting & PR</a>
                        <a href="#">Customer Sucees & Sales</a>
                        <a href="#">IT, Product, Design & UX</a>
                        <a href="#">Finance & Administration</a>
                        <a href="#">HR & more</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
export default Header; 