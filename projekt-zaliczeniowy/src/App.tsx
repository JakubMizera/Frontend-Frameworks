import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Comments from "./components/common/Routes/Comments/Comments";
import Home from "./components/common/Routes/Home/Home";
import Photos from "./components/common/Routes/Photos/Photos";
import Posts from "./components/common/Routes/Posts/Posts";
import Profile from "./components/common/Routes/Profile/Profile";

import { Menu } from "./components/common/Menu";
import { Layout } from "./components/common/layout";
import MenuLi from "./style/MenuLi";

const App: FC = () => {
    return (
        <Router>
            <Menu>
                <>
                    <MenuLi>
                        <Link to='/'>Home</Link>
                    </MenuLi>
                    <MenuLi>
                        <Link to='posts'>Posts</Link>
                    </MenuLi>
                    <MenuLi>
                        <Link to='profile'>Profile</Link>
                    </MenuLi>
                    <MenuLi>
                        <Link to='photos'>Photos</Link>
                    </MenuLi>
                    <MenuLi>
                        <Link to='comments'>Comments</Link>
                    </MenuLi>   
                </>
            </Menu>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="comments" element={<Comments />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;