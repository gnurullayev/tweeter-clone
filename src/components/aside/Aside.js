import React from 'react';
import "./aside.css"
import search from "../../assets/search.svg"
import asideSetings from "../../assets/aside-setinges.svg"
import trendsSettingsImg from "../../assets/trends-setings-img.png"

function Aside() {
    return (
        <aside className='aside'>
            <div className="aside__content">
                <label className='aside__search search'>
                    <img className='search__img' src= {search} alt="search" />
                    <input className='search__text' type="text" placeholder='Search Twitter'/>
                </label>

                <div className="aside__trends trends">
                    <div className="trends__header">
                        <p className='trends__header-text'>Trends for you</p>
                        <button className='trends__header-btn'>
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

                                <button className="trends__setinges">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>

                            <li className='trends__item'>
                                <div className="trends__item-start">
                                    <p className='trends__item-country'>Trending in Germany</p>
                                    <p className='trends__item-thema'>Revolution</p>
                                    <p className='trends__item-like'>50.4K Tweets</p>
                                </div>

                                <button className="trends__setinges">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>

                            <li className='trends__item'>
                                <div className="trends__item-start">
                                    <p className='trends__item-country'>Trending in Germany</p>
                                    <p className='trends__item-thema'>Revolution</p>
                                    <p className='trends__item-like'>50.4K Tweets</p>
                                </div>

                                <button className="trends__setinges">
                                    <img src= {trendsSettingsImg} alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="trends__footer">
                        <a className='trends__footer-btn' href="/">Show more</a>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Aside;