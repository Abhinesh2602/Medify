import { Header } from "../components/Header";
import Hero from "./Hero";
import OfferCards from "./OfferCards";

function Home() {
  const home = true;
  return (
    <div>
      <Header home={home} />
      <Hero> </Hero>
      <OfferCards />
    </div>
  );
}

export default Home;
