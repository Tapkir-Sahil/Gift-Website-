import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import Recommended from "./components/Recommended";
import PromoBanner from "./components/PromoBanner";
import FanCarousel from "./components/FanCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection/>
      <Recommended />
      <PromoBanner />
      <FanCarousel />
    </>
  );
}

export default App;