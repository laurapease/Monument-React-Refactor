import React from 'react';
import './Blog.css';
import Header from '../components/BlogHeader';
import Article from '../components/Article/Article';
import Aside from '../components/Aside';
import Footer from '../components/BlogFooter';
import Comment from '../components/Comment';

function Blog() {
    return (
        <div>
        <Header />
        <Article />
        <Comment />
        <Footer />
        {/* <Aside /> */}

        </div>
    )
};

export default Blog;