import Header from "../../components/header/Header";
import "./profile.css"
import profileImg from "../../assets/profil-avatar.png"
import accountBg from "../../assets/profil-account-bg.png"
import icon1 from "../../assets/location.svg"
import icon2 from "../../assets/link.svg"
import icon3 from "../../assets/birthday-icon.svg"
import icon4 from "../../assets/calendar.svg"
import { Link, Outlet, useLocation} from "react-router-dom";

import {useDispatch} from "react-redux"
import { personalPosts } from '../../redux/actions';


function Profile() {
    const {pathname} = useLocation()

    const dispatch = useDispatch()

    return (
        <div className= "profile">
            <Header title = "Bobur"/>

            <div className= "profile__top">
                <div className="profil__top-bg">
                    <img className="bg-img" src= {accountBg} alt=""  />
                </div>

                <div className="profile__top-content">
                    <img className="profile-avatar" src= {profileImg} alt=""  />
                    <button className="profile-edit">Edit profil</button>
                </div>

                <div className="profile__top-info">
                    <h2 className="profile__title">Bobur</h2>
                    <h5 className="profile__subtitle">@bobur_mavlonov</h5>
                
                    <p className="job-title">
                        UX&UI designer at 
                        <a className="job-title-link" href="">@abutechuz</a>
                    </p>

                    <ul className="profile__top-settings profile-settings">
                        <li className="profile-settings__item">
                            <img className="profile-settings__item--icon" src= {icon1} alt="" />
                            Mashag’daman
                        </li>

                        <li className="profile-settings__item">
                            <img className="profile-settings__item--icon" src= {icon2} alt="" />
                            <a className="profile-settings__link" href="" >t.me/boburjon_mavlonov</a>
                        </li>

                        <li className="profile-settings__item">
                        <img className="profile-settings__item--icon" src= {icon3} alt="" />
                            Born November 24, 2000
                        </li>

                        <li className="profile-settings__item">
                        <img className="profile-settings__item--icon" src= {icon4} alt="" />
                            Joined May 2020
                        </li>
                    </ul>

                    <ul className="profile__top-extra profile-extra">
                        <li className="profile-extra__item">
                            <span className="profile-extra__item--span">45</span>
                            Following
                        </li>

                        <li className="profile-extra__item">
                           <span className="profile-extra__item--span">27</span>
                            Followers
                        </li>
                    </ul>

                </div>
            </div>

            <ul className="profile__midle-list">
                <li className="profile__midle-item" onClick={() => dispatch(personalPosts())}>
                    <Link 
                    to="/profile" 
                    className= {`profile__midle-link ${pathname === "/profile" && "extra-active"}`}
                    >
                        Tweets
                    </Link>
                </li>

                <li className="profile__midle-item">
                    <Link 
                    to="/profile/with_replies" 
                    className= {`profile__midle-link ${pathname === "/profile/with_replies" && "extra-active"}`}
                    >
                        Tweets & replies
                    </Link>
                </li>

                <li className="profile__midle-item">
                    <Link to="/profile/media" 
                    className= {`profile__midle-link ${pathname === "/profile/media" && "extra-active"}`}
                    >
                        Media
                    </Link>
                </li>

                <li className="profile__midle-item">
                    <Link 
                    to="/profile/likes" 
                    className= {`profile__midle-link ${pathname === "/profile/likes" && "extra-active"}`}
                    >
                        Likes
                    </Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default Profile;