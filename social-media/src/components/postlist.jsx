import React, { useContext, useEffect } from "react";
import Post from "./post";

import { Postdata } from "../store/postdataprovider";
import Message from "./msg";

function Postlist() {
  const { postlistdata, addApiPosts } = useContext(Postdata);
  useEffect(
()=>{console.log("data is gettingg...");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addApiPosts(data.posts));},[]
  )


  console.log(postlistdata);

  return (
    <div className="postlist">
      {postlistdata && postlistdata.length === 0 && (
        <Message  />
      )}
      {postlistdata &&
        postlistdata.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default Postlist;
