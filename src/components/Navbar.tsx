import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTl.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backdropFilter: "blur(10px)",
        backgroundColor: "#00000050",
        ease: "power1.inOut",
        duration: 1,
      }
    );
  }, []);
  return (
    <nav>
      <div className="backdrop">
        <a href="#home" className="flex items-center gap-2">
          <img src={"/images/logo.png"} alt="logo" />
          <p>Logo</p>
        </a>

        <ul>
          {navLinks.map((navItem) => (
            <li key={navItem.id}>
              <a href={`#${navItem.id}`}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
