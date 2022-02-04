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
        setPosts(body);
    }
    const confirmDelete = (event) => {
        const confirm = window.confirm("Delete the blog post?");
        if (!confirm)
            event.preventDefault();
    }
    return (
        <div>
            <h1 id="article">Blog Posts</h1>
            <Link className={admin ? "createBlog" : "hidden"} to="/post/create">Create Post</Link>
            {
                posts.map((i, key) => (
                    <div className="articleList" key={key}>
                        <Link className="articleListItem"  to={`/article/${i._id}`}>
                            {i.title}
                        </Link>
                        <Link className={admin ? "articleListItem" : "hidden"} to={`/post/update/${i._id}`}>
                            ✍
                        </Link>
                        <Link onClick={confirmDelete} className={admin ? "articleListItem" : "hidden"} to={`/post/delete/${i._id}`}>
                            🗑
                        </Link>
                    </div>
                ))
            }
            
        </div>
    );
};

export default ArticleList;