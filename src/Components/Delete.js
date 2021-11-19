import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Delete() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`)
    .then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      // alert("Post deleted!");
      toast("Post Deleted");
      setPost(null);
    });
  }

  if (!post) return "No post! or Loading...";

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
      <ToastContainer />
    </div>
  );
}
