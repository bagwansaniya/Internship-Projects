import { useContext, useRef } from "react";
import { Postdata } from "../store/postdataprovider";

function Form() {
  const { addpost } = useContext(Postdata);
  const handleonsubmit = (eve) => {
    eve.preventDefault();
    const idvalue = id.current.value;
    const titlevalue = title.current.value;
    const bodyvalue = body.current.value;
    const tagsvalue = tags.current.value.split(" ");
    const reactionsvalue = reactions.current.value;
    addpost(idvalue, titlevalue, bodyvalue, tagsvalue, reactionsvalue);
  };
  const id = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();
  return (
    <>
      <form className="form" onSubmit={handleonsubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post ID
          </label>
          <input
            type="id"
            ref={id}
            className="form-control inputtag"
            placeholder="Whats special about today...??? add a title here..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            ref={title}
            type="title"
            className="form-control inputtag"
            placeholder="Whats special about today...??? add a title here..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description/body
          </label>
          <input
            type="body"
            ref={body}
            className="form-control inputtag"
            placeholder="want to share moree...?? add a Description here..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Reaction
          </label>
          <input
            type="reaction"
            ref={reactions}
            className="form-control inputtag"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tags
          </label>
          <input
            type="tags"
            ref={tags}
            className="form-control inputtag"
            placeholder="want to tag someonee...??? add a tags here..!"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
export default Form;
