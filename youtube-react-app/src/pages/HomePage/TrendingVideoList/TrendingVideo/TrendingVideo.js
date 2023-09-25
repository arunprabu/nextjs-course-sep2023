import React from 'react'

const TrendingVideo = ({title, thumbnailUrl, views, publishedOn, children }) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
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
}

export default TrendingVideo;
