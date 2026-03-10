import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import Recommended from "./components/Recommended";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection/>
      <Recommended />
      <PromoBanner />
    </>
  );
}

export default App;