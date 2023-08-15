import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>nura-500</h1>
                    <p>Earbuds that listen to how you hear, then build a sonic profile that’s unique to you.</p>
                    <div className="comming-soon">Comming Soon!</div>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Get Notified</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="banner_img"/>
            </div>
        </div>
    );
};

export default Banner;
