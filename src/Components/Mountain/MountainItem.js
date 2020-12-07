import React, { useState } from "react";
export default function MountainItem(props) {
  const [like, setLike] = useState(false);
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <React.Fragment>
      <div
        className="card m-2 m-sm-2 m-lg-4 text-center"
        style={{ width: "18rem" }}
      >
        <img
          style={{ width: "100%", height: "200px" }}
          alt={props.alt}
          className="card-img-top"
          src={props.source}
        />
        <div className="card-body">
          <div className="card-title my-2">
            <h5>{props.name}</h5>
          </div>
          <div className="card-text mt-4">
            <button
              className="btn btn-small btn-danger text-white p-0 px-2"
              style={{ fontSize: "24px" }}
              onClick={likeHandler}
            >
              {like ? (
                <span> &#9829;</span>
              ) : (
                <span>&#9825;</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
