import React from 'react';
import "./home.css"
import ContentImg from "../../assets/content-btn-img.png"
import profileImg from "../../assets/sidebar-account-img.png" 
import image from "../../assets/photo.png"
import gif from "../../assets/gif.svg"
import stats from "../../assets/text-setings.svg"
import smile from "../../assets/stiker.svg"
import schedule from "../../assets/schedule.svg"
import CardBtns from '../../components/CardBtns';


function Home() {
    return (
        <div className='home'>
            <div className='home__header header'>
                <div className="header__content content">
                    <h3 className='content__title'>Home</h3>
                    <button className='content__btn card__btn'>
                        <img src= {ContentImg} alt=""/>
                    </button>
                </div>
            </div>

            <div className="home__body">
                <div className="home__profile">
                        <img className='home__profile-img' src= {profileImg} alt="my profile" />

                        <div className="home__profile-content">
                            <input className='home__prfile-start' type="text" placeholder='What’s happening'/>

                            <div className="home__profile-end">
                                <ul className="home__profile-emoge emoge-list">
                                    <li className='emoge-list__item card__btn'>
                                        <img src= {image} alt= "img" />
                                    </li>

                                    <li className='emoge-list__item card__btn'>
                                        <img src= {gif} alt= "gif" />
                                    </li>

                                    <li className='emoge-list__item card__btn'>
                                        <img src= {stats} alt= "stats" />
                                    </li>

                                    <li className='emoge-list__item card__btn'>
                                        <img src= {smile} alt= "smile" />
                                    </li>

                                    <li className='emoge-list__item card__btn'>
                                        <img src= {schedule} alt= "schedule" />
                                    </li>
                                </ul>

                                <button className=' btn home__profile-textSubmit'>
                                    Tweet
                                </button>
                            </div>
                        </div>

                </div>

                <CardBtns/>
            </div>
        </div>
    );
}

export default Home;