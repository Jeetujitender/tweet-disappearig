const tweets = (state = [], action) => {
  switch (action.type) {
    case "ADD_TWEET":
      return [
        ...state,
        {
          id: action.id,
          tweet: action.tweet,
          duration: action.duration,
        },
      ];
    case "DELETE_TWEET": {
      console.log(action.id);
      return state.filter((tweet) => tweet.id !== action.id);
    }
    default:
      return state;
  }
};

export default tweets;
