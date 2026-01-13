import { featureLists, goodLists } from "../constants";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Mask = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    gsap.set(".masked", {
      scale: 1,
      maskSize: "70%",
    });
    const start = isMobile ? "15% 20%" : "40% 40%";
    const end = isMobile ? "bottom center" : "+=200%";
    const maskTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".art",
        start,
        end,
        pin: true,
        scrub: true,
      },
    });
    maskTL.to(".fade", {
      stagger: 0.1,
      ease: "power1.inOut ",
      opacity: 0,
      duration: 1,
    });
    maskTL.to(".masked", {
      scale: 1.2,
      maskSize: "400%",
      duration: 3,
      ease: "power1.inOut",
    });
    maskTL.to("#appear, .masked-content", {
      duration: 2,
      stagger: 0.1,
      ease: "power1.inOut",
      opacity: 1,
    });

    // gsap.to("#appear, .masked-content", {
    //   duration: 2,
    //   stagger: 0.1,
    //   ease: "power1.inOut",
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".art",
    //     start: "bottom 20%",
    //     markers: true,
    //   },
    // });
  });
  return (
    <section className="art min-h-dvh relative p-6 lg:pb-32   mx-auto  ">
      <div className="container mx-auto text-center space-y-2">
        <h2 className="fade text-6xl font-modern-negra text-[#505050] lg:text-[12rem]">
          The ART
        </h2>
        <div className="w-full  lg:h-[70vh] lg:w-[60vw] mx-auto  rounded-4xl overflow-hidden lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 space-y-6 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <img
            src={"/images/under-img.jpg"}
            className="masked mask-[url('/images/mask-img.png')] mask-center mask-no-repeat  "
          />
          {/* <h3 className="font-modern-negra text-3xl font-medium ">
            Sip-Worthy Perfection
          </h3> */}

          <div className="masked-content lg:space-y-5 ">
            <h2
              className="text-3xl lg:text-4xl  text-center mx-auto font-medium "
              id="appear"
            >
              Made with Craft, Poured with Passion
            </h2>
            <p className="text-sm font-thin " id="appear">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>

        <div className="space-y-4 font-thin relative text-sm  lg:bottom-0 lg:absolute lg:-translate-y-1/2 lg:flex lg:justify-between lg:w-[calc(100%-3rem)] lg:items-end lg:h-[calc(100%-20rem)] lg:text-lg ">
          <ul className="flex flex-col gap-1 fade">
            {goodLists.map((feature) => (
              <li className="list-none flex items-center gap-2">
                <i>
                  <FaCheckCircle className="" />
                </i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col items-end fade">
            {featureLists.map((feature) => (
              <li className="list-none flex items-center gap-2">
                <span>{feature}</span>
                <i>
                  <FaCheckCircle />
                </i>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        src={"/images/drink4.png"}
        className="hidden lg:top-20 lg:left-10 opacity-0 absolute lg:h-1/3 rotate-15 lg:flex"
        id="appear"
      />
      <img
        src={"/images/cup-2.png"}
        className="hidden lg:bottom-0 lg:right-0 opacity-0 absolute lg:h-1/3 lg:flex"
        id="appear"
      />
    </section>
  );
};

export default Mask;
