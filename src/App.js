import axios from "axios";
import React, { useState, useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setPost(response.data);
      console.log("setPost is: ", response)
    });
  }, []);

  // console.log(React.useEffect)

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h4 style={{color:"red"}}>{post.userId}</h4>
    </div>
  );
}