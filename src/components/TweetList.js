import React from 'react';
import { connect } from 'react-redux';
// import { addTweet } from "../actions"

import { Card } from 'antd';
const TweetList = (props) => {
    const renderList = () => {
        return (
            props.tweets.map(tweet => {
                return (
                    <div className="site-card-border-less-wrapper">
                        <Card title="Disappearing time :  {tweet.duration} " bordered={false} style={{ width: 600 }}>
                            <p>{tweet.tweet_text} </p>


                        </Card>
                    </div>
                );

            })
        )
    };
    return <div>{renderList()}</div>
}
const mapStateToProps = state => {
    console.log(state.Tweet)
    return { tweets: state.Tweet }
};

export default connect(mapStateToProps)(TweetList);