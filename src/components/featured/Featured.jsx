import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredBox">
        <div className="featuredContainer">
            <div className="fDeatails">
                <p className="fName">
                    DeadPool
                </p>
                <p className="fTitle">
                American superhero film
                </p>
                <p className="fDesc">
                Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.
                </p>
            </div>
            <div className="fBtns">
                <button className="fPlay">
                    <PlayArrowIcon/>
                    Play
                    </button>
                <button className="fInfo">
                    <InfoIcon/>
                    Info
                    </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured