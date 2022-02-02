import React from 'react';

const Upvote = (props) => {
    const { id, upvotes, setArticleData } = props;
    
    async function fetchUpVotes() {
        const response = await fetch(`/api/comments/${id}/upvotes`, {
            method: 'post'
        });
        const body = await response.json();
        setArticleData(body);
    }

    return (
        <div>
            <button className="like" onClick={fetchUpVotes}>👍</button>
            <p className="votes">This article has {upvotes} upvotes</p>
        </div>
    );
}

export default Upvote;


