import "@styles/HowItWorks.css";
import thematic from "@assets/images/thematic-pc-view.png";
import JoinButton from "./ui/JoinButton/JoinButton";
const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h3>HOW IT WORKS</h3>{" "}
      <span >
        <img
          src={thematic}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </span>{" "}
      <div className="how-it-works-content">
        <h1>Secret weapon for killer content revealed</h1>{" "}
        <p >
          See how Thematic makes royalty-free music for YouTube, social media
          &amp; podcasts a reality
        </p>
      </div>{" "}
      <span style={{ width: "fit-content", alignSelf: "center" }}>
        <JoinButton text="Learn How Thematic Works" />
      </span>
    </div>
  );
};

export default HowItWorks;
