import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import ByRating from "../../components/byRating/ByRating";
import ByLikes from "../../components/byLikes/ByLikes";
import ByViews from "../../components/byViews/ByViews";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state)=>(state.user));
    return (
    <div>
      <Navbar genre='false'/>
      <Featured />
      <div className="home">
      <p className="homeText">Most Watched</p>
      <ByViews/>
      <p  className="homeText">Popular on Netflix</p>
      <ByRating/>
      <p className="homeText">Popular in your Country</p>
      <ByLikes/>
      <div id="movies">
      <p className="homeText">Movies</p>
      <List category='movie' id="movies"/>
      </div>
      <div id="series">
      <p className="homeText">Web Series</p>
      <List category='web series' id="series"/>
      </div>
      <div id="new">
      <p className="homeText">New&Hot</p>
      <List category='new' id="new"/>
      </div>
      <div id="mylist">
      <p className="homeText">Favourites</p>
      <List category='mylist' id="mylist" userId={user.currentUser._id}/>
      </div>

      </div>
      
    </div>
  );
};

export default Home;
