import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


const ArticleList = ({admin}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        const response = await fetch(`/api/posts`);
        const body = await response.json();
        console.log(body);
        setPosts(body);
    }
    return (
        <div>
            <h1 id="article">Blog Posts</h1>
            <Link className={admin ? "createBlog" : "hidden"} to="/post/create">Create Post</Link>
            {
                posts.map((i, key) => (
                    <Link className="articleList" key={key} to={`/article/${i._id}`}>
                        {i.title}
                    </Link>
                ))
            }
            
        </div>
    );
};

export default ArticleList;