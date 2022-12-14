import React, { useState, useEffect } from 'react';
import "./sidebar.css"

import profileImg from "../../assets/sidebar-account-img.png" 
import more from "../../assets/profil-more.svg"
import { Link, useLocation } from 'react-router-dom';
import AccountChange from '../AccountChange';

import {useDispatch} from "react-redux"
import { PersonalPosts } from '../../redux/actions';


function Sidebar() {
    const [visble,setVisible] = useState(false)
    const {pathname} = useLocation()

    const dispatch = useDispatch()

    const visibleHandler = (e) => {
        setVisible(true)
        e.stopPropagation()
    }

    return (
        <div className='sidebar'>
            <ul className='sidebar__list'>
                <li className="sidebar__item">
                    <Link 
                    to="/" 
                    className="sidebar__link" 
                    style={{fontWeight: pathname === "/" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className= {`sidebar__link-img ${pathname === "/" ? "active": ""}`}><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg>
                        <span className='sidebar__link-span'>Home</span>
                    </Link>
                </li>

                <li className="sidebar__item">
                    <Link 
                    to="/explore" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/explore" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/explore" ? "active": ""}`}><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
                        <span className='sidebar__link-span'>Explore</span>
                    </Link>
                </li>

                <li className="sidebar__item">
                    <Link 
                    to="/notife" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/notife" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/notife" ? "active": ""}`}><g><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg>
                        <span className='sidebar__link-span'>Notifications</span>
                    </Link>
                </li>

                <li className="sidebar__item">
                    <Link 
                    to="/message" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/message" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/message" ? "active": ""}`}><g><path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path></g></svg>
                        <span className='sidebar__link-span'>Messages</span>
                    </Link>
                </li>

                <li className="sidebar__item">
                    <Link 
                    to="/bookmark" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/bookmark" ? "700" : "600"}}>
                       <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/bookmark" ? "active": ""}`}><g><path d="M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"></path></g></svg>
                        <span className='sidebar__link-span'>Bookmarks</span>
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link 
                    to="/lists" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/lists" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/lists" ? "active": ""}`}><g><path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path><path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path></g></svg>
                        <span className='sidebar__link-span'>Lists</span>
                    </Link>
                </li>

                <li className="sidebar__item" onClick={() => dispatch(PersonalPosts())}>
                    <Link 
                    to="/profile" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/profile" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className={`sidebar__link-img ${pathname === "/profile" ? "active": ""}`}><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg>
                        <span className='sidebar__link-span'>Profile</span>
                    </Link>
                </li>

                <li className="sidebar__item">
                    <Link 
                    to="/more" 
                    className="sidebar__link"
                    style={{fontWeight: pathname === "/more" ? "700" : "600"}}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"  className={`sidebar__link-img ${pathname === "/more" ? "active": ""}`}><g><circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>
                        <span className='sidebar__link-span'>More</span>
                    </Link>
                </li>
            </ul>

            <button className='btn sitebar__btn'>
                <span className='btn sitebar__btn-text'>Tweeter</span>
            </button>

            <div className={`sidebar__account account ${visble && "active"}`} onClick={visibleHandler}>
                {
                    visble && <AccountChange setVisible = {setVisible}/>
                }
                <img className='account__img' src={profileImg} alt="profile" />

                <div className="account__content">
                    <h3 className="account__title">Bobur</h3>
                    <h5 className="account__subtitle">@bobur_mavlonov</h5>
                </div>

                <button className= {`account__btn`}>
                    <img src= {more} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Sidebar;