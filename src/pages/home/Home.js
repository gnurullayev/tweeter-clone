import React, { useState } from 'react';
import "./home.css"

import profileImg from "../../assets/sidebar-account-img.png" 
import image from "../../assets/photo.png"
import gif from "../../assets/gif.svg"
import stats from "../../assets/text-setings.svg"
import smile from "../../assets/stiker.svg"
import schedule from "../../assets/schedule.svg"
import CardBtns from '../../components/CardBtns';
import Header from '../../components/header/Header';
import {useDispatch} from "react-redux"
import { addPost } from '../../redux/actions';


function Home() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()


    const postSubmit = () => {
        const newArr = {
            id: new Date().getTime(),
            post: true,
            avatar: profileImg,
            first_name: "Bobur",
            timeText: "@bobur_mavlonov · Apr 1",
            body: value,
            body2: null,
            contentImg: null,
            like: false,
            commendNum: 0,
            likeNum: 0,
            retweetNum: 0,
        }
        
        dispatch(addPost(newArr))
        setValue("")
    }

    return (
        <div className='home'>
            <Header title = "Home"/>

            <div className="home__body">
                <div className="home__profile">
                        <img className='home__profile-img' src= {profileImg} alt="my profile" />

                        <div className="home__profile-content">
                            <input
                             className='home__prfile-start' 
                             type="text" 
                             placeholder='What’s happening'
                             value={value}
                             onChange = {(e) => setValue(e.target.value)}
                            />

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

                                <button 
                                className= {`btn home__profile-textSubmit ${value.length >= 1 ? "btn-active" : "" }`}
                                onClick = {postSubmit}
                                >
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