import React from 'react';
import "./aside.css"
import search from "../../assets/search.svg"
import asideSetings from "../../assets/aside-setinges.svg"
import trendsSettingsImg from "../../assets/trends-setings-img.png"
import avatar1 from "../../assets/avatar1.png"
import avatar2 from "../../assets/avater2.png"
function Aside() {
    return (
        <aside className='aside'>
            <div className="aside__header">
                <label className='aside__search search'>
                    <img className='search__img' src= {search} alt="search" />
                    <input className='search__text' type="text" placeholder='Search Twitter'/>
                </label>
            </div>
            <div className="aside__content">
                <div className="aside__trends trends">
                    <div className="trends__header">
                        <p className='trends__header-text'>Trends for you</p>
                        <button className='trends__header-btn card__btn'>
                            <img className='trends__header-img'  src= {asideSetings} alt="setinges" />
                        </button>
                    </div>

                    <div className="trends__body">
                        <ul className="trends__list">
                            <li className='trends__item'>
                                <div className="trends__item-start">
                                    <p className='trends__item-country'>Trending in Germany</p>
                                    <p className='trends__item-thema'>Revolution</p>
                                    <p className='trends__item-like'>50.4K Tweets</p>
                                </div>

                                <button className="trends__setinges card__btn">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>

                            <li className='trends__item'>
                                <div className="trends__item-start">
                                    <p className='trends__item-country'>Trending in Germany</p>
                                    <p className='trends__item-thema'>Revolution</p>
                                    <p className='trends__item-like'>50.4K Tweets</p>
                                </div>

                                <button className="trends__setinges card__btn">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>

                            <li className='trends__item'>
                                <div className="trends__item-start">
                                    <p className='trends__item-country'>Trending in Germany</p>
                                    <p className='trends__item-thema'>Revolution</p>
                                    <p className='trends__item-like'>50.4K Tweets</p>
                                </div>

                                <button className="trends__setinges card__btn">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="trends__footer">
                        <a className='trends__footer-btn' href="/">Show more</a>
                    </div>
                </div>

                <div className="aside__likes likes">
                    <div className="likes__header">
                        <p className='likes__header-text'>Trends for you</p>
                    </div>

                    <div className="likes__body">
                        <ul className="likes__list">
                            <li className='likes__item'>
                                <img className='likes__img' src={avatar1} alt="profile" />

                                <div className="likes__content">
                                    <h3 className="likes__title">Mushtariy</h3>
                                    <h5 className="likes__subtitle">@Mushtar565266</h5>
                                </div>

                                <button className='likes__btn'>
                                    Follow
                                </button>
                            </li>

                            <li className='likes__item'>
                                <img className='likes__img' src={avatar2} alt="profile" />

                                <div className="likes__content">
                                    <h3 className="likes__title">Mushtariy</h3>
                                    <h5 className="likes__subtitle">@Mushtar565266</h5>
                                </div>

                                <button className='likes__btn'>
                                    Follow
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="likes__footer">
                        <a className='likes__footer-btn' href="/">Show more</a>
                    </div>
                </div>
                   
                <div className="aside__end">
                    <a className='aside__end-link' href="/">Terms of Service</a>
                    <a className='aside__end-link' href="/">Privacy Policy</a>
                    <a className='aside__end-link' href="/">Cookie Policy</a>
                    <a className='aside__end-link' href="/">Imprint</a>
                    <a className='aside__end-link' href="/">Ads Info</a>
                    <a className='aside__end-link' href="/">More ···</a>
                    <a className='aside__end-link' href="/">© 2021 Twitter, Inc.</a>
                </div>
            </div>
        </aside>
    );
}

export default Aside;