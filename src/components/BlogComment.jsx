import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchLoader } from "../hooks/useFetchLoader";

export const BlogComment = () => {
  const { postId } = useParams();
  const titleRef = useRef();
  const bodyRef = useRef();
  const [posted, setPosted] = useState([]);
  const [comment, setComment] = useState([]);

  const handleData = (data) => {
    setPosted((prevPosted) => [...prevPosted, data]);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredBody = bodyRef.current.value;

    const postedData = {
      title: enteredTitle,
      body: enteredBody,
    };

    // console.log(postedData)

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postedData),
    });
    const data = await response.json();
    console.log(data);

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const callback = function (data) {
    setComment(data);
  };
  useFetchLoader(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    callback
  );

  const comments = comment.map((com) => {
    return (
      <div key={com.id} className="card border-1 p-2 fs-5 peg">
        <div className="card-body justify-content-center">
          <div>
            <span> Title: {com.name} </span>
            <div>Email: {com.email}.</div>
            <span>Comment: {com.body}.</span>
          </div>
        </div>
      </div> 
    );
  });

  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-7">
            <div className="cform">
              <form onSubmit={formSubmissionHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    ref={titleRef}
                    id="title"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputText1" className="form-label">
                    Comment
                  </label>
                  <textarea
                    ref={bodyRef}
                    id="body"
                    className="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="col-10 col-md-5">
            <h2>Comments</h2>
            <div className="card border-1 p-2 fs-5 peg">
              <div className="card-body justify-content-center">
                {comments}
                {posted.map((post) => {
                  return <>
                    <div key={post.id}>
                      <span> Title: {post.title} </span>
                      <span>{post.body}.</span>
                    </div>
                  </>
                })} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const handleData
