import React from "react";
import "@styles/SocialPlatforms.css";
import { socialPlatforms } from "@assets/socials/socials.js";
import JoinButton from "./ui/JoinButton/JoinButton";

const SociaPlatforms = () => {
  const socials = socialPlatforms.map((platform) => (
    <div key={platform.name} className="social-platform-item">
      <img src={platform.icon} alt={platform.name} />
    </div>
  ));
  return (
    <div className="social-platform-section">
      <div className="logged-out-title-social-platforms">
        Copyright safe for all creator platforms
      </div>
      <div className="social-media-platforms">{socials}</div>
      <span style={{width: "fit-content", alignSelf:"center"}}><JoinButton text="Get Started For Free" isNav={false}/></span>
      
    </div>
  );
};

export default SociaPlatforms;
