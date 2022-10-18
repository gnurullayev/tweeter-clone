
import { FILTER_TRENDS,FETCH_POSTS,ADD_POST,ADD_MEDIA,FILTER_LIKES, LIKED,PERSONAL_POSTS} from "../types";
import cardImg1 from "../../assets/card-img.png"
import cardImg2  from "../../assets/card-img2.png"
import cardImg3  from "../../assets/card-img3.png"
import carContentImg  from "../../assets/card-content-img.png"

import profileImg from "../../assets/sidebar-account-img.png" 
import personalPostImg from "../../assets/personalPostImg.png"

const initialPosts = [
    {
        id: "dew",
        post: false,
        avatar: cardImg1,
        first_name: "Designsta",
        timeText: "@inner · 25m",
        body: "When two people who are dating both like one of my tweets, i like to picture them both laughing at it together while holding hands in a swan boat",
        body2: null,
        contentImg: null,
        like: false,
        commendNum: 5,
        likeNum: 10,
        retweetNum: 8,
        shareNum: 4,
    },
    {
        id: "dqw",
        post: false,
        avatar: cardImg2,
        first_name: "cloutexhibition",
        timeText: "@RajLahoti · 22m",
        body: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
        body2: null,
        contentImg: null,
        like: false,
        commendNum: 15,
        likeNum: 50,
        retweetNum: 30,
        shareNum: 10,
    },
    {
        id:"crew",
        post: false,
        avatar: cardImg3,
        first_name: "CreativePhoto",
        timeText: "@cloutexhibition · 1h",
        body: "Обетда..... ",
        body2: "Кечиринглар",
        contentImg: carContentImg,
        like: false,
        commendNum: 56,
        likeNum: 100,
        retweetNum: 82,
        shareNum: 40,
    },
]

const initialPersonalPosts = [
    {
        id: "dewpp",
        post: true,
        avatar: profileImg,
        first_name: "Bobur",
        timeText: "@bobur_mavlonov · Apr 1",
        body: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
        body2: null,
        contentImg: null,
        like: false,
        commendNum: 5,
        likeNum: 12,
        retweetNum: 8,
        shareNum: 4,
    },
    {
        id: "dqwuy",
        post: true,
        avatar: profileImg,
        first_name: "Bobur",
        timeText: "@bobur_mavlonov · Apr 1",
        body: "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.Gap faqat biznes trenerlar haqida emas.",
        body2: "Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. ",
        contentImg: null,
        like: false,
        commendNum: 15,
        likeNum: 8,
        retweetNum: 30,
        shareNum: 10,
    },
    {
        id:"crewred",
        post: true,
        avatar: profileImg,
        first_name: "Bobur",
        timeText: "@bobur_mavlonov · Apr 1",
        body: "A bo'pti maskamasman",
        body2: null,
        contentImg:personalPostImg,
        like: false,
        commendNum: 56,
        likeNum: 100,
        retweetNum: 82,
        shareNum: 40,
    },
]

const initialState1 = {
    posts : initialPosts,
    personalPosts: [],
    likes: [],
    media:[],
    trends:[],

}

export const postReducer = (state = initialState1, {type,payload}) => {
    switch (type) {
        case FETCH_POSTS: 
        const newPosts = payload.map(post => {
            return {
                ...post,
                post: false,
                timeText: "@cloutexhibition · 1h",
                body: "Обетда..... ",
                body2: "Кечиринглар",
                contentImg: null,
                like: false,
                commendNum: 56,
                likeNum: 100,
                retweetNum: 82,
                shareNum: 40,
            }
        })
            return {
                ...state,
                posts: [...initialPosts,...initialPersonalPosts, ...newPosts]
            }
        case LIKED:
            
            return {
                ...state,
                posts: payload,
            } 
        case PERSONAL_POSTS:
            const newPosts2 = state.posts.filter(post => post.post)

            console.log(state.posts);
            return {
                ...state,
                personalPosts: newPosts2
            }      
        case ADD_POST:
            state.posts.unshift(payload)
            return {
                ...state,
                posts: state.posts
            }
        case ADD_MEDIA:
            return {
                ...state,
                media: [...state.media, payload]
            }    
        case FILTER_LIKES: 
            return {
                ...state,
                likes: state.posts.filter(post => post.like)
            }    
        default:
            return state    

    }
}