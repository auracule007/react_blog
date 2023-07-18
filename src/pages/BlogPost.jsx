import React, { useState } from "react";
import { useFetchLoader } from "../hooks/useFetchLoader";
import { Link, useParams } from "react-router-dom";

export const BlogPost = () => {
  // const { postId } = useParams()
  const [isloading, setIsLoading] = useState(true);
  const [fetching, setFetching] = useState([]);

  const callback = function (data) {
    // console.log(data);
    setIsLoading(false);
    const slicedData = data.slice(0, 10);
    setFetching(slicedData);
  };

  useFetchLoader("https://jsonplaceholder.typicode.com/posts", callback);

  // const handleDelete = async (e)=> {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  //     method: "DELETE",
  //   });
  //   const data = await response.json();
  //   // setFetching(data)
  // }
  

  const posts = fetching.map((post) => {
    return (
      <div key={post.id} className="col-12 btn-outline-primary text-dark">
        <div className="card border-1 p-4 fs-4">
          <div className="card-body justify-content-between d-flex">
            <span>{post.title}
            </span>
            <Link to={`details/${post.id}`}> Read More</Link>

          </div>
          </div>
          {/* <button onClick={handleDelete}>Delete</button> */}
      </div>
    );
    // console.log("post", fetchData[i])
  });

  return (
    <>
      {isloading && (
        <p className="text-center fs-5 text-secondary">Loading....</p>
      )}
      {!isloading && (
        <div className="container mt-5 mb-5">
          <h2 className="fs-4 text-dark text-uppercase">Available Post</h2>
          {/* <Link to={`details/${postId}`}>  */}
          <div className="row justify-content-center">{posts}</div>
          <button>load more</button>
          {/* </Link> */}
        </div>
      )}
    </>
  );
};
