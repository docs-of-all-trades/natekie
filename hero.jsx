import React from "react";
import ThemedImage from "@theme/ThemedImage";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-left-title">
            thirdweb <br /> documentation
          </h1>
          <p className="hero-left-description">
          Pioneering Technology for Banks of Every Scale — From
          Core Banking to Digital Solutions
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-right-image-container">
            <ThemedImage
              sources={{
                light: "/assets/docs-hero-light-2.png",
                dark: "/assets/docs-hero.png",
              }}
              className="hero-right-image"
              alt="thirdweb documentation hero image"
            />
          </div>
        </div>
      </div>

      <hr className="hero-divider" />
    </>
  );
}