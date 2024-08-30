import { Hero } from "@/components";

import scaleImg from "public/scale.webp";

const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
};

export default ScalePage;
