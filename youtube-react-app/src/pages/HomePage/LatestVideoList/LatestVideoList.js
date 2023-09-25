import LatestVideo from "./LatestVideo/LatestVideo";

// rafce
const LatestVideoList = () => {
  return (
    <div className="row">
      <h3>Latest Video List</h3>
      <div className="col-md-3">
        <LatestVideo
          title="Ind vs Aus ODI #2 2023"
          thumbnailUrl="https://placehold.co/400x300?text=IndVsAus-2ndODI"
          views="1.5M"
          publishedOn="today"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LatestVideo>
      </div>

      <div className="col-md-3">
        <LatestVideo
          title="Ind vs Aus ODI Match #1 2023"
          thumbnailUrl="https://placehold.co/400x300?text=IndVsAus-1stODI"
          views="1M"
          publishedOn="1 day ago"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </LatestVideo>
      </div>

      <div className="col-md-3">
        <LatestVideo
          title="Expendables 4 Trailer"
          thumbnailUrl="https://placehold.co/400x300?text=Expendables-4-Trailer"
          views="4M"
          publishedOn="2 day ago"
        >
          Quisquam, quos, quibusdam, quia, quod voluptas voluptates
        </LatestVideo>
      </div>

      <div className="col-md-3">
        <LatestVideo
          title="BBC Earth #2"
          thumbnailUrl="https://placehold.co/400x300?text=BBC-Earth-2"
          views="4M"
          publishedOn="4 day ago"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LatestVideo>
      </div>
    </div>
  );
};

export default LatestVideoList;
