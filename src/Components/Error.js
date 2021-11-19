import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Error() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get(`${baseURL}/asdf`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
