import gsap from "gsap";
import "./style.css";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../../utils";
import { useEffect, useState } from "react";

function Hero() {
  const [video, setVideo] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);

  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideo(smallHeroVideo);
    } else {
      setVideo(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideo);

    return () => {
      window.removeEventListener("resize", handleVideo);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-[83%] w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro Max
        </p>
        <div className=" w-full">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={video}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
