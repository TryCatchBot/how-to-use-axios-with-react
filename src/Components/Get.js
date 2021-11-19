import axios from "axios";
import React, { useState, useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Get() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setPost(response.data);
      console.log("setPost is: ", response)
    });
  }, []);


  
  

  if (!post) return "Loading..." ;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <h4 style={{color:"red"}}>{post.userId}</h4>
    </div>
  );
}