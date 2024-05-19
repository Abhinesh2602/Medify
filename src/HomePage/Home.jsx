import { Header } from "../components/Header";
import Hero from "./Hero";
import SearchSection from "./SearchSection";

function Home() {
  const home = true;
  return (
    <div>
      <Header home={home} />
      <Hero> </Hero>
    </div>
  );
}

export default Home;
