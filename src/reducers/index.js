import { combineReducers } from "redux";
// import { addTweet } from "../actions";

// //add tweet
// const addingTweet = (tweetList, action) => {
//     if (action.type === "ADD_TWEET") { return [...tweetList, action.payload] }
//     return tweetList;
// }


//tweet list
const TweetReducer = () => {
    return [
        { tweet_text: 'Godi media!! :)', duration: '2020-09-09 03:10:00' }

    ]
}


export default combineReducers({
    Tweet: TweetReducer
    // AddTweet: addingTweet
});