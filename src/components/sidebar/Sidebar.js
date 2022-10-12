import React from 'react';
import "./sidebar.css"

import profileImg from "../../assets/sidebar-account-img.png" 
import more from "../../assets/profil-more.svg"

function Sidebar(props) {
    return (
                <div className='sidebar'>
        <ul className='sidebar__list'>
                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Home</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Explore</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Notifications</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Messages</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Bookmarks</a>
                </li>
                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Lists</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">Profile</a>
                </li>

                <li className="sidebar__item">
                    <a href="" className="sidebar__link">More</a>
                </li>
            </ul>

            <button className='btn sitebar__btn'>Tweeter</button>

            <div className="sidebar__account account">
                <img className='account__img' src={profileImg} alt="profile" />

                <div className="account__content">
                    <h3 className="account__title">Bobur</h3>
                    <h5 className="account__subtitle">@bobur_mavlonov</h5>
                </div>

                <button className='account__btn'>
                    <img src= {more} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Sidebar;