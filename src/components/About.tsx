import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import Rating from "./Rating";
import { useState } from "react";
import AvatarList from "./AvatarList";
import { profileLists } from "../constants";

const About = () => {
  const [rating] = useState<number>(4.5);

  useGSAP(() => {
    const titleSplit = SplitText.create("#abt h2", {
      type: "words",
    });

    const subContentSplit = SplitText.create("#abt .sub-cont", {
      type: "lines",
    });

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#abt",
        start: "top center",
      },
    });

    aboutTimeline.from("#badge", {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    });

    aboutTimeline.from(
      titleSplit.words,
      {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: "power1.out",
        opacity: 0,
      },
      "-=0.8"
    );

    aboutTimeline.from(
      subContentSplit.lines,
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: "power1.out",
      },
      "-=0.8"
    );

    aboutTimeline.from(
      ".t-grid div, .b-grid div",
      {
        opacity: 0,
        stagger: 0.05,
        ease: "power1.inOut",
        duration: 1,
      },
      "-=0.5"
    );
  }, []);
  return (
    <section id="abt" className="min-h-screen py-12 px-6 space-y-5">
      <div className="lg:grid lg:grid-cols-12 gap-5 ">
        <div className="cont flex flex-col md: justify-between items-start gap-5 flex-1 lg:col-span-8">
          <div className="space-y-5">
            <p
              id="badge"
              className="text-black bg-white px-4 py-2 font-medium rounded-full inline-block"
            >
              Best Cocktails
            </p>
            <h2 className="text-4xl font-modern-negra lg:max-w-xl lg:text-6xl">
              Where every detail matters—from muddle to garnish
            </h2>
          </div>
        </div>

        <div className="sub-cont   lg:col-span-4  lg:text-lg font-thin lg:flex lg:flex-col lg:justify-between lg:gap-10">
          <div>
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-2 ">
              <Rating rate={rating} />
              <p className="text-yellow">
                <span className="text-xl lg:text-3xl">{rating}</span>
                /5
              </p>
              <p className="text-sm ">More than +12000 customers</p>
            </div>

            <div className="flex items-center justify-center ">
              <div className="pl-9 py-5 bg-linear-to-b from-[rgba(49,49,49,1)] to-[rgba(15,15,15,1)] rounded-full">
                <AvatarList avatars={profileLists} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="grid-container" className="space-y-5 w-full ">
        {/* Top */}
        <div className="t-grid grid grid-cols-1  lg:grid-cols-12 gap-5 w-full ">
          <div className="lg:col-span-3 rounded-3xl  overflow-hidden w-full h-72">
            <img
              src={"/images/abt1.png"}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="lg:col-span-6 rounded-3xl  overflow-hidden w-full h-72">
            <img
              src={"/images/abt2.png"}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="lg:col-span-3 rounded-3xl  overflow-hidden w-full h-72">
            <img
              src={"/images/abt5.png"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom */}

        <div className="b-grid space-y-5 grid grid-cols-1 lg:grid-cols-12 gap-5  overflow-hidden">
          <div className="lg:col-span-8 rounded-3xl  w-full h-72">
            <img
              src={"/images/abt3.png"}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="lg:col-span-4 rounded-3xl  w-full h-72">
            <img
              src={"/images/abt4.png"}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
