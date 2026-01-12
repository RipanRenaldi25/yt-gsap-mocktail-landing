import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars" });
    const paragrafSplit = new SplitText(".subtitle", { type: "lines" });

    const heroTimeline = gsap.timeline({});

    heroSplit.chars.forEach((letter) => letter.classList.add("text-gradient"));

    paragrafSplit.chars.forEach((line) =>
      line.classList.add("text-transparent")
    );

    heroTimeline.from(heroSplit.chars, {
      yPercent: 100,
      stagger: 0.07,
      ease: "expo.out",
      duration: 1,
      opacity: 0,
    });

    heroTimeline.from(
      paragrafSplit.lines,
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.08,
        duration: 2,
        ease: "expo.out",
      },
      "0.5"
    );

    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    leafTimeline.to(
      ".left-leaf",
      {
        y: -200,
      },
      0
    );
    leafTimeline.to(
      ".right-leaf",
      {
        y: 200,
      },
      0
    );

    const startValue = isMobile ? "center 40%" : "center 60%";
    const endValue = isMobile ? "+=200%" : "bottom top";

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (!videoRef.current) {
      return;
    } else {
      videoRef.current.onloadedmetadata = () => {
        videoTimeline.to(videoRef.current, {
          currentTime: videoRef!.current!.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <section className="noisy " id="hero">
        <h1
          className="title bg-linear-to-b from-black to-white 
           bg-clip-text  text-transparent"
        >
          MOJITO
        </h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="left-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="subtitle">Cool, Crisp, Classic</p>
              <p className="font-modern-negra text-6xl text-yellow">
                Sip the spirit
              </p>
              <p className="font-modern-negra text-6xl text-yellow">
                of summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle font-thin text-md">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <h5
                className="subtitle text-start font-thin hover:cursor-pointer"
                id="view-cocktails"
                onClick={() => {
                  const viewCocktailsTL = gsap.timeline();
                  viewCocktailsTL.to(window, {
                    scrollTo: "#cocktails",
                    duration: 0.1,
                    ease: "none",
                  });
                }}
              >
                View cocktails
              </h5>
            </div>
          </div>
        </div>
      </section>

      <div className="video">
        <video
          src="/videos/output2.mp4"
          playsInline
          muted
          className="absolute bottom-0 left-0 w-full h-1/2 lg:h-[80%] object-contain object-bottom "
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;
