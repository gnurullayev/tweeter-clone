import React from 'react';
import "./followList.css"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avater2.png"

function FollowList() {
    return (
       <>
            <h4 className='follow-title'>Who to follow</h4>
            
            <ul className="follow__list">
                <li className='follow__item'>
                    <div className="follow__item-header">
                        <div className="fillow__item-left">
                            <img className='follow__img' src={avatar1} alt="profile" />

                            <div className="follow__content">
                                <h3 className="follow__item-title">Mushtariy</h3>
                                <h5 className="follow__item-subtitle">@Mushtar565266</h5>
                            </div>
                        </div>

                        <button className='follow__btn'>
                            Follow
                        </button>
                    </div>

                    <div className="folow__item-body">
                        <p>
                            PhD em Odontologia / Harmonização Facial Universidade de Harvard / Primeira Doutora Invisalign do Brasil
                        </p>
                    </div>
                </li>

                <li className='follow__item'>
                    <div className="follow__item-header">
                        <div className="fillow__item-left">
                            <img className='follow__img' src={avatar2} alt="profile" />

                            <div className="follow__content">
                                <h3 className="follow__item-title">Shuhratbek</h3>
                                <h5 className="follow__item-subtitle">@mrshukhrat</h5>
                            </div>
                        </div>

                        <button className='follow__btn'>
                            Follow
                        </button>
                    </div>

                    <div className="folow__item-body">
                        <p>
                            Award-winning business & tech journalist, currently with The Financial Express. Die-hard believer that good journalism is good business. Tweets are personal.
                        </p>
                    </div>
                </li>

            
            </ul>
       </>
    );
}

export default FollowList;