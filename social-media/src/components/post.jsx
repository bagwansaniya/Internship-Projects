import { useContext, useState } from "react";
import { Postdata } from "../store/postdataprovider";
import { AiFillDelete } from "react-icons/ai";
function Post({ post }) {
  const { deletepost } = useContext(Postdata);
  const [status, setstatus] = useState("diactive");
  return (
    <>
      <div>
        <div
          className="card postcard"
          style={{ width: "30rem" }}
          onClick={() => {
            setstatus("active");
          }}
        >
          <div className="card-body">
            <span
              className={`position-absolute top-0 start-100 translate-middle badge rounded-pill  ${
                status === "active" ? "bg-success" : "bg-danger"
              } `}
            >
              {post.views}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag, index) => {
              return (
                <span className="badge text-bg-info tag" key={index}>
                  {tag}
                </span>
              );
            })}
            <button
              className="delete"
              onClick={() => {
                console.log("delete is clicked");
                deletepost(post.id);
              }}
            >
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
