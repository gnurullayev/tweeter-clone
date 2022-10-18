import React from 'react';
import "./header.css"
import ContentImg from "../../assets/content-btn-img.png"
import { useLocation } from 'react-router-dom';


function Header({title}) {

    const {pathname} = useLocation()
    return (
        <div className='home__header header'>
            <div className="header__content">
                <h3 className='header__conten-title'>{title}</h3>
                {
                pathname === "/" ? 
                (
                    <button className='header__content-btn card__btn'>
                        <img src= {ContentImg} alt=""/>
                    </button>
                )
                :
                null
                }
               
            </div>
        </div>
    );
}

export default Header;