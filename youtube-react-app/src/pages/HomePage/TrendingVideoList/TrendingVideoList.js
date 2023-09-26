import { useState } from "react";
import TrendingVideo from "./TrendingVideo/TrendingVideo";

const TrendingVideoList = () => {
  // states  -- placeholder for component-wide updateable data
  // Let's try useState() hook
  const [resolution, setResolution] = useState("4K");
  console.log(resolution);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "BBC Earth: The Power of Nature",
      thumbnailUrl: "https://placehold.co/400x300?text=BBC-Earth",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1M",
      publishedOn: "today",
    },
    {
      id: 2,
      title: "NatGeo: All about Oceans",
      thumbnailUrl: "https://placehold.co/400x300?text=NatGeo-All-about-Oceans",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1M",
      publishedOn: "yesterday",
    },
    {
      id: 3,
      title: "Discovery: The World is Awesome",
      thumbnailUrl: "https://placehold.co/400x300?text=The-World-is-Awesome",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "2M",
      publishedOn: "2 days ago",
    },
    {
      id: 4,
      title: "Expendables 4",
      thumbnailUrl: "https://placehold.co/400x300?text=Expendables-4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      views: "1.5M",
      publishedOn: "4 days ago",
    }
  ]);

  const handleChangeResolution = () => {
    // whenever the state is updated -- UI will re-render
    setResolution("8K");
  };

  return (
    <div className="row">
      <h3>Trending Video List</h3>
      <p>Enjoy watching videos in stunning {resolution} resolution</p>
      <button onClick={handleChangeResolution} className="btn btn-primary">
        Change resolution
      </button>

      <p>Videos Found: {videos.length}</p>
      <div className="col-md-3">
        <TrendingVideo
          id={videos[0].id}
          title={videos[0].title}
          thumbnailUrl={videos[0].thumbnailUrl}
          views={videos[0].views}
          publishedOn={videos[0].publishedOn}
        >
          {videos[0].description}
        </TrendingVideo>
      </div>

      <div className="col-md-3">
        <TrendingVideo
          id={videos[1].id}
          title={videos[1].title}
          thumbnailUrl={videos[1].thumbnailUrl}
          views={videos[1].views}
          publishedOn={videos[1].publishedOn}
        >
          {videos[1].description}
        </TrendingVideo>
      </div>

      <div className="col-md-3">
        <TrendingVideo
          id={videos[2].id}
          title={videos[2].title}
          thumbnailUrl={videos[2].thumbnailUrl}
          views={videos[2].views}
          publishedOn={videos[2].publishedOn}
        >
          {videos[2].description}
        </TrendingVideo>
      </div>

    </div>
  );
};

export default TrendingVideoList;
