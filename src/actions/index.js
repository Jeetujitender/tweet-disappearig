//action
let nextTweetId = 0;
export const addTweet = (tweet, duration) => ({
  type: "ADD_TWEET",
  id: nextTweetId++,
  tweet,
  duration,
});
export const deleteTweet = (id) => ({
  type: "DELETE_TWEET",
  id,
});

export const TweetActions = {
  ADD_TWEET: "ADD_TWEET",
  DELETE_TWEET: "DELETE_TWEET",
};
