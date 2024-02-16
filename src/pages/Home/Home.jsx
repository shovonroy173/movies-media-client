import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <div className="home">
      <p className="homeText">Continue to Watch</p>
      <List />
      <p  className="homeText">Popular on Netflix</p>
      <List />
      <p className="homeText">Popular in your Country</p>
      <List />
      <p className="homeText">Finish this weakend</p>
      <List />
      </div>
    </div>
  );
};

export default Home;
