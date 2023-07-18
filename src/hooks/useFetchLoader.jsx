import React, { useEffect } from "react";

export const useFetchLoader = (url, callback) => {
  useEffect(() => {
    async function fetchPost(callback) {
      const response = await fetch(url);
      const data = await response.json();
      callback(data);
    }
    fetchPost(callback);
  }, []);
};
