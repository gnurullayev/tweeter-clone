import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Bookmark from '../../pages/bookmarks/Bookmark';
import Explore from '../../pages/explore/Explore';
import Home from '../../pages/home/Home';
import List from '../../pages/lists/List';
import Message from '../../pages/messages/Message';
import More from '../../pages/more/More';
import Notification from '../../pages/notifications/Notification';
import Profile from '../../pages/profile/Profile';
import "./Main.css"

function Main() {


    return (
        <main className='main'>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/explore' element = {<Explore/>}/>
                <Route path='/notife' element = {<Notification/>}/>
                <Route path='/message' element = {<Message/>}/>
                <Route path='/bookmark' element = {<Bookmark/>}/>
                <Route path='/lists' element = {<List/>}/>
                <Route path='/profile' element = {<Profile/>}/>
                <Route path='/more' element = {<More/>}/>
                <Route path='*' element = {<Navigate to= "/"/>}/>
            </Routes>
        </main>
    );
}

export default Main;