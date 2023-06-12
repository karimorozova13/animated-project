import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useWindowSize } from "@/util/hooks/useWindowSize";
import { bg, bird, butterfly1, butterfly2, cupid } from "@/config/images";

import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import MainTitle from "@/components/MainTitle";

const gallery = () => {
  const { width } = useWindowSize();
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        speed={1}
        offset={0}
        factor={5}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>

      <ParallaxLayer offset={0.1} speed={0.8} style={{ opacity: 0.7 }}>
        <img
          src={butterfly1}
          style={{
            display: "block",
            width: width < 992 ? "35%" : "15%",
            marginLeft: "15%",
          }}
        />
        <img
          src={butterfly2}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={0.8} style={{ opacity: 0.7 }}>
        <img
          src={cupid}
          style={{
            display: "block",
            width: width < 992 ? "55%" : "15%",
            marginLeft: "55%",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.9}
        factor={1.8}
        speed={0.8}
        style={{ opacity: 0.7 }}
      >
        <img
          src={bird}
          style={{ display: "block", width: width < 992 ? "55%" : "20%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.8}
        factor={1.8}
        style={{ opacity: 0.5 }}
      >
        <img
          src={butterfly2}
          style={{ display: "block", width: "30%", marginLeft: "70%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 0.5 }}>
        <img
          src={butterfly1}
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.5} style={{ opacity: 0.7 }}>
        <img
          src={cupid}
          style={{ display: "block", width: "40%", marginLeft: "60%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={0.5} style={{ opacity: 0.7 }}>
        {width > 991 && (
          <img src={bird} style={{ display: "block", width: "20%" }} />
        )}
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={0.5} factor={2}>
        <div style={{ padding: "0 15px" }}>
          <Timeline />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.2} factor={0.2}>
        <div style={{ padding: "0 15px" }}>
          <MainTitle title={"Platon Morozov"} />
        </div>
      </ParallaxLayer>

      <Footer />
    </Parallax>
  );
};

export default gallery;
