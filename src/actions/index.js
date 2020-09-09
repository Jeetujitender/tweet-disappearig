//action

export const addTweet = (tweet_text, duration) => {
    return {
        type: "ADD_TWEET",
        payload: {
            tweet_text: tweet_text,
            duration: duration

        }
    };
};