import { Hero } from "@/components";

import homeImg from "public/home.webp";

const Home = () => {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
};
export default Home;
