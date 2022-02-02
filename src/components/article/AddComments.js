import React, { useState } from 'react';


const AddComments = (props) => {
    const { id, setArticleData } = props;
    const [commentValues, setCommentValues] = useState({ username: "", comment: "" });

    function handleChange(event){
        const { name, value } = event.target;
        setCommentValues({ ...commentValues, [name]: value });
    }
    async function fetchComments() {
        const username = commentValues.username;
        const text = commentValues.comment;

        if (username !== "" && text !== "") {
            const response = await fetch(`/api/comments/${id}/comment`, {
                method: 'post',
                body: JSON.stringify({ username, text }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json();
            setArticleData(body);
            setCommentValues({ username: "", comment: "" });
        }
    }
    return (
        <div className="addComment">
            <h3 className='commentHeading'>Add a Comment</h3>
            <label>
                Name:
                <br></br>
                <input type="text" name="username" value={commentValues.username} onChange={ handleChange }/>
            </label>
            <br></br>
            <label>
                Comment:
                <br/>
                <textarea rows="4" cols="50" name="comment" value={commentValues.comment} onChange={ handleChange } ></textarea>
            </label>
            <br></br>
            <button onClick={fetchComments}>Submit</button>
        </div>
   
    );
};


export default AddComments;