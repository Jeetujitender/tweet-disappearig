import React from "react";

import { Card } from "antd";
import { connect } from "react-redux";
import { deleteTweet } from "../actions";
const TweetList = (props) => {
  const renderList = () => {
    return props.tweets.map((tweet) => {
      return (
        <div className="site-card-border-less-wrapper">
          <Card
            title={`Disappearing time :  ${tweet.duration}`}
            bordered={false}
            style={{ width: 600 }}
          >
            <p>{tweet.tweet} </p>
            <button onClick={() => props.dispatch(deleteTweet(tweet.id))}>
              delete
            </button>
          </Card>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

export default connect(mapStateToProps)(TweetList);
