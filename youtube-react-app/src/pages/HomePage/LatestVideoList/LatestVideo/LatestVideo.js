import React from 'react'

const LatestVideo = ({ title, thumbnailUrl, views, publishedOn, children }) => {
  // receive props from LatestVideoList.js
  // props are objects
  // props are read-only (immutable)
  // props.title =  "new Title"; // error
  // props are passed from parent comp to child comp
  // props can also have props children

  return (
    <div className="card">
      <img
        src={thumbnailUrl}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{views} Views</li>
        <li className="list-group-item">Published {publishedOn}</li>
      </ul>
    </div>
  );
};

export default LatestVideo;