import axios from "axios";
import React, { useState, useEffect} from "react";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts" 
// });

const baseURL = "https://jsonplaceholder.typicode.com/posts"

export default function App() {
  const [post, setPost] = useState(null);

//   useEffect(() => {
//     async function getPost() {
//       const response = await client.get("/1");
//       setPost(response.data);
//     }
//     getPost();
//   }, []);


useEffect(() => {
    async function getPost() {
      const response = await axios.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

//   async function deletePost() {
//     await client.delete("/1");
//     alert("Post deleted!");
//     setPost(null);
//   }


async function deletePost() {
    await axios.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }


  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}