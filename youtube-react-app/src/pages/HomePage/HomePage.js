import LatestVideoList from "./LatestVideoList/LatestVideoList";
import TrendingVideoList from "./TrendingVideoList/TrendingVideoList";

const HomePage = () => {
  return (
    <div>
      <h1>Let's learn React Concepts</h1>

      <h2>Props Demo</h2>
      <LatestVideoList />
      <hr />

      <h2>States & Events Demo</h2>
      <TrendingVideoList />
      <hr />
      <h2>States, Events, Conditionals, Lists & Keys Demo</h2>
    </div>
  );
}

export default HomePage;
