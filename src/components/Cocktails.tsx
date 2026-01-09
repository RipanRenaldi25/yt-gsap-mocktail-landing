import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Cocktails = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });
  const startTrigger = isMobile ? "70% bottom" : "top 30%";
  const endTrigger = isMobile ? "bottom bottom" : "bottom 80%";
  useGSAP(() => {
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: startTrigger,
        end: endTrigger,
        scrub: true,
      },
    });
    leafTimeline.from(
      "#c-left-leaf",
      {
        x: -100,
        y: 100,
      },
      0
    );
    leafTimeline.from(
      "#c-right-leaf",
      {
        x: 100,
        y: 100,
      },
      0
    );
  }, []);
  return (
    <section id="cocktails" className={"noisy z-99 "}>
      <img
        id="c-left-leaf"
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        className={`absolute left-0 md:bottom-0 md:top-auto bottom-0   md:w-fit w-1/3 `}
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
        className={`absolute right-0 md:bottom-0 md:top-auto bottom-0  md:w-fit w-1/3 `}
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li>
                <div>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktail</h2>
          <ul>
            {mockTailLists.map(({ country, detail, name, price }) => (
              <li>
                <div>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
