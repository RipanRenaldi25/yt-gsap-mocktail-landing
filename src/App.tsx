import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import { registerSW } from "virtual:pwa-register";
import { ScrollToPlugin } from "gsap/all";
import Mask from "./components/Mask";

registerSW({
  immediate: true,
});

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

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
        <Mask />
        <div className="h-screen"></div>
      </main>
    </>
  );
};

export default App;
