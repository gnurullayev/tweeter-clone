// import cardImg1 from "../assets/card-img.png"
// import cardImg2  from "../assets/card-img2.png"
// import cardImg3  from "../assets/card-img3.png"
// import carContentImg  from "../assets/card-content-img.png"
import {createStore,combineReducers} from "redux"

import { postReducer } from "./resucers/postReducer"
import { activeReducer } from "./resucers/activeReducer"

// const initialPosts = [
//     {
//         id: 1,
//         personalPost: false,
//         avatar: cardImg1,
//         title: "Designsta",
//         timeText: "@inner · 25m",
//         body: "When two people who are dating both like one of my tweets, i like to picture them both laughing at it together while holding hands in a swan boat",
//         body2: null,
//         contentImg: null,
//         like: false,
//         commendNum: 5,
//         likeNum: 10,
//         retweetNum: 8,
//         shareNum: 4,
//     },
//     {
//         id:2,
//         post: false,
//         avatar: cardImg2,
//         title: "cloutexhibition",
//         timeText: "@RajLahoti · 22m",
//         body: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
//         body2: null,
//         contentImg: null,
//         like: false,
//         commendNum: 15,
//         likeNum: 50,
//         retweetNum: 30,
//         shareNum: 10,
//     },
//     {
//         id:3,
//         post: false,
//         avatar: cardImg3,
//         title: "CreativePhoto",
//         timeText: "@cloutexhibition · 1h",
//         body: "Обетда..... ",
//         body2: "Кечиринглар",
//         contentImg: carContentImg,
//         like: false,
//         commendNum: 56,
//         likeNum: 100,
//         retweetNum: 82,
//         shareNum: 40,
//     },
// ]


export const initialState2 = {
    lenguage: null,
    loading: true,   
}

export const storeCreate = createStore(combineReducers({postReducer, activeReducer}) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



