import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BlogComment } from "../components/BlogComment";
import { useFetchLoader } from "../hooks/useFetchLoader";

export const BlogDetails = () => {
   const navigate = useNavigate()
    const { postId } = useParams()
    const [isShowing, setIsShowing] = useState(true)
    const [items, setItems] = useState([])

    const callback = function(data){
        // console.log(data)
        setIsShowing(false)
        setItems(data)
    }
    useFetchLoader(`https://jsonplaceholder.typicode.com/posts/${postId}/`, callback)

    const handleDelete = async (e)=> {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      navigate('/')
      console.log(data)
    }

      
    
  return (
    <>
        {isShowing && <p className="text-center text-secondary fs-5">Loading....</p>}
        {!isShowing && (
            <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-4">
                <img src="/img/kw-4.jpg" className="w-100 h-100" alt="" />
                <em>{items.user_id}</em>
              </div>
    
              <div className="col-12 col-sm-8">
                <div className="container">
                  <h2>About</h2>
                  <p className="mb-3 fs-4">
                    {items.title}
                  </p>
                  <p className="mb-3 fs-4">
                    {items.body}
                  </p>
                </div>
              </div>
            </div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}

      <BlogComment />
    </>
  );
};
