import React, { FC } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Comments from "./components/common/Routes/Comments/Comments";
import Home from "./components/common/Routes/Home/Home";
import Photos from "./components/common/Routes/Photos/Photos";
import Posts from "./components/common/Routes/Posts/Posts";
import Profile from "./components/common/Routes/Profile/Profile";

import { Layout } from "./components/common/layout";

const App: FC = () => {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>
                <Link to='posts'>Posts</Link>
                <Link to='profile'>Profile</Link>
                <Link to='photos'>Photos</Link>
                <Link to='comments'>Comments</Link>
            </div>
            <Layout>
                <Routes>
                    <Route path="posts" element={<Posts />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="comments" element={<Comments />} />
                    <Route index element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;