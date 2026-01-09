import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Cocktails />
        <About />
      </main>
    </>
  );
};

export default App;
