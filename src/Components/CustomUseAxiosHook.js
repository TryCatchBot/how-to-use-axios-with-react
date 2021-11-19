import { useAxios } from "use-axios-client";

export default function App() {
  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts"
  });

  if (loading || !data) return "Loading  Data...";
  if (error) return "Error!";

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <p>{error.message}</p>
    </div>
  ) 
}