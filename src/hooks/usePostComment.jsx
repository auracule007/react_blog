import React, { useEffect } from 'react'

export const usePostComment = (url, callback) => {
    useEffect(() => {
        async function usePostData(callback) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title:"title",
                    body:"body", 
                    userId: Math.random().toString()
                })

            });
            const data = await response.json();
            callback(data)
        }
        usePostData(callback)
    }, [])
}
