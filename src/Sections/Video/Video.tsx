import { LangType } from "../../common/Lang/french";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

// styles
import videoStyle from "./Video.module.scss";

const Video = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;

    return (
        <section id="Video" className={videoStyle.video_section}>
            <div className={videoStyle.left_decoration}>
                <svg viewBox="0 0 209 722" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208.542 346.383C208.542 504.582 145.263 521.234 0.386719 721.064V0.012207C69.772 62.7365 208.543 219.825 208.542 346.383Z" />
                </svg>
            </div>
            <div className={videoStyle.video_container}>
                <h2>
                    {Lang.video.titles[0].main}{" "}
                    <span className={videoStyle.highlight}>{Lang.video.titles[0].highlight}</span>
                </h2>
                <h1 className={videoStyle.coming}>COMING SOON</h1>
                {/*<iframe
                <img className={videoStyle.youtube_video} src={teaser} />
                    src="https://www.youtube.com/embed/6TEBHQ-qm7c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>*/}
                <h2>
                    {Lang.video.titles[1].parts![0]}{" "}
                    <span className={videoStyle.highlight}>{Lang.video.titles[1].highlight}</span>{" "}
                    {Lang.video.titles[1].parts![1]}
                </h2>
            </div>
            <div className={videoStyle.right_decoration}>
                <svg viewBox="0 0 303 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M123.899 229.209C61.7262 186.886 15.5265 172.231 0.198257 170.195C15.3703 168.33 61.3514 154.02 123.899 111.698C202.084 58.7945 263.414 4.95487 357.984 1.20952C452.555 -2.53583 533.548 80.3304 535.42 171.624C537.293 262.917 445.064 338.76 357.984 339.229C270.905 339.697 201.615 282.112 123.899 229.209Z" />
                </svg>
            </div>
        </section>
    );
};

// https://www.youtube.com/watch?v=6TEBHQ-qm7c&t=552s

export default Video;
