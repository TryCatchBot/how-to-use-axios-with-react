import axios from "axios";
import React, { useState, useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Put() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post! or Loading..."

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}