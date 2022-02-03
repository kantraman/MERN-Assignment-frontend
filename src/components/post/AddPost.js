import React, { useState } from 'react';
import useToken from "../userAccounts/useToken";
import ErrorPage from "../error/Error";
import "../article/Article.css";

const AddPost = (props) => {
    //const { id, setArticleData } = props;
    const [postValues, setPostValues] = useState({ title: "", description: "", name: "Srikanth R" });
    const { token } = useToken();
    function handleChange(event){
        const { name, value } = event.target;
        setPostValues({ ...postValues, [name]: value });
    }
    async function fetchPost() {
        const name = postValues.name;
        const title = postValues.title;
        const description = postValues.description;

        if (title !== "" && description !== "") {
            const response = await fetch(`/api/posts/post`, {
                method: 'post',
                body: JSON.stringify({ title, description, name }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json();
            
            if (body.status === "Success") {
                alert("Post Successful");
                setPostValues({ title: "", description: "", name: "Srikanth" });
            } else {
                alert("Post Unsuccessful!");
            }
            
        } else {
            alert("Enter all required fields.");
        }
    }
    if(!token.admin) return <ErrorPage />
    return (
        <div className="blogPost">
            <div className="addComment">
                <h3 className='commentHeading'>Add a Blog Post</h3>
                <label>
                    Title:
                    <br></br>
                    <input type="text" name="title" value={postValues.title} onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    Description:
                    <br />
                    <textarea rows="20" cols="100" name="description" value={postValues.description} onChange={handleChange} ></textarea>
                </label>
                <br></br>
                <button onClick={fetchPost}>Submit</button>
            </div>
        </div>
    );
};

export default AddPost;