import React from 'react';
import './Blog.css';
import Header from '../components/BlogHeader';
import Article from '../components/Article/Article';
import Aside from '../components/Aside';

function Blog() {
    return (
        <div>
        <Header />
        <Article />
        {/* <Aside /> */}

        </div>
    )
};

export default Blog;