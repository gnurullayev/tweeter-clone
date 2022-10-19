import { FETCH_POSTS,PERSONAL_POSTS,ADD_POST, ADD_MEDIA, FILTER_LIKES,FILTER_TRENDS, LIKED } from "./types"

export const fetchPosts = (posts) => ({type: FETCH_POSTS, payload: posts});
export const PersonalPosts = (posts) => ({type: PERSONAL_POSTS, payload: posts});
export const addPost = (posts) => ({type: ADD_POST, payload: posts});
export const addMedia = (posts) => ({type: ADD_MEDIA, payload: posts});
export const filterLikes = (posts) => ({type: FILTER_LIKES,});
export const filterTrends = (posts) => ({type: FILTER_TRENDS,});
export const liked = (posts) => ({type: LIKED,payload: posts});