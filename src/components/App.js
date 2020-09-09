import React from 'react';
import { Layout, Menu, Button } from 'antd';
import "antd/dist/antd.css";
import DateTime from './DateTime';
import TweetField from './TweetField';
import TweetList from './TweetList';
import { addTweet } from '../actions';

const { Header } = Layout;

const App = () => {
    return (



        < Layout className="layout" >
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
                    <TweetField />

                    <DateTime style={{ margin: "0 0 0 50px" }} />
                    <Button style={{ width: 100, margin: "5px 50px" }} onClick={dispatch("ADD_TWEET")} type="primary" shape="round">Tweet</Button>
                </div>

                <TweetList />
            </Header>


        </Layout >
    );
}
export default App;




