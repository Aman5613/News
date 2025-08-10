import Science from "./Science";
import India from "./India";
import Politics from "./Politics";
import Sports from "./Sports";
import World from "./World";
import Health from "./Health";
import Business from "./Business";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="px-3 py-3">
      <Hero />
      <India />
      <World />
      <Politics />
      <Science />
      <Health />
      <Business />
      <Sports />
      <Footer />
    </div>
  );
};

export default Home;
