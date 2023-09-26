import { useState } from "react";

const RecommendedVideoList = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Money Heist: Season 5",
      thumbnailUrl: "https://placehold.co/400x300?text=Money-heist",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1M",
      publishedOn: "today",
    },
    {
      id: 2,
      title: "Squid Games",
      thumbnailUrl: "https://placehold.co/400x300?text=Squid+Games",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1M",
      publishedOn: "yesterday",
    },
    {
      id: 3,
      title: "Expendables 4-Trailer",
      thumbnailUrl: "https://placehold.co/400x300?text=Expendables-4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1.5M",
      publishedOn: "4 days ago",
    },
    {
      id: 4,
      title: "The World is Awesome",
      thumbnailUrl: "https://placehold.co/400x300?text=The-World-is-Awesome",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "2M",
      publishedOn: "2 days ago",
    },
  ]);

  // // Conditional Rendering
  // if (videos.length === 0) {
  //   return (
  //     <div className="alert alert-warning">
  //       Sorry! unable to load recommended videos. Try again later!
  //     </div>
  //   );
  // }

  return (
    <div className="row">
      <h3>Recommended Video List</h3>
      <p>We recommend videos based on your watch history</p>

      {/* Conditional Rendering with just ternary if */}
      {videos.length === 0 && (
        <div className="alert alert-warning">
          Sorry! unable to load recommended videos. Try again later!
        </div>
      )}

      {/* Let's do the looping -- a.k.a lists & keys */}
      {videos.map((video) => {
        console.log(video);
        return (
          <div className="col-md-3" key={video.id}>
            <div className="card">
              <img
                src={video.thumbnailUrl}
                className="card-img-top"
                alt={video.title}
              />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{video.views} Views</li>
                <li className="list-group-item">
                  Published {video.publishedOn}
                </li>
                <li className="list-group-item">
                  <button type="button" className="btn btn-sm btn-success">
                    Add to Watchlist
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedVideoList;
