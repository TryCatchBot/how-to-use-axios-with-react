import React from "react";
import Get from "./Components/Get";
import Post from "./Components/Post";
import Put from "./Components/Put";
import Delete from "./Components/Delete";
import Error from "./Components/Error";
import AxiosInstance from "./Components/AxiosInstance";
import AsyncAwait from "./Components/AsyncAwait";
import CustomUseAxiosHook from "./Components/CustomUseAxiosHook";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  return (
    <div>
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
          To fetch data or retrieve it, make a{" "}
          <code style={{ color: "red" }}>GET</code> request.
        </i>
      </h1>
      <Get />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
          To create new data, make a <code style={{ color: "red" }}>POST</code>{" "}
          request.
        </i>
      </h1>
      <Post />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        To update a given resource, make a <code style={{ color: "red" }}>PUT</code>{" "}
          request.
        </i>
      </h1>
      <Put />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        To delete a resource, use the  <code style={{ color: "red" }}>DELETE</code>{" "}
          method.
        </i>
      </h1>
      <Delete />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        Catching Error with axios  <code style={{ color: "red" }}></code>{" "}
        </i>
      </h1>
      <Error />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        Axios Instance  <code style={{ color: "red" }}></code>{" "}
        </i>
      </h1>
      <AxiosInstance />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        Async Await  <code style={{ color: "red" }}></code>{" "}
        </i>
      </h1>
      <AsyncAwait />
      <h1 style={{ color: "#2B52BA", backgroundColor: "#fafafa" }}>
        <i>
        Custom useAxios Hook  <code style={{ color: "red" }}></code>{" "}
        </i>
      </h1>
      <CustomUseAxiosHook />
    </div>
  );
}
