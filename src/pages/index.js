import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GalleryLink from "@/components/GalleryLink";
import MainTitle from "@/components/MainTitle";
import {
  baloonsSky,
  butterflies,
  cat,
  dolphin,
  gif,
  ladybag,
} from "@/config/images";
import { useWindowSize } from "@/util/hooks/useWindowSize";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  const { width } = useWindowSize();
  const offsetGallery = width < 425 ? 1.5 : 1.9;
  const offsetLink = width < 325 ? 1.8 : 1.6;
  const factorLink = width < 325 ? 2.6 : 1.8;
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        speed={1}
        offset={0}
        factor={4.3}
        horizontal={true}
        style={{
          backgroundImage: `url(${baloonsSky})`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 0.01, end: 2.5 }}
        style={{
          textAlign: "right",
          paddingRight: 15,
          width: "100%",
          height: 150,
        }}
      >
        <img src={gif} className={"gif"} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={0.8} style={{ opacity: 0.7 }}>
        <img
          src={dolphin}
          style={{ display: "block", width: "15%", marginLeft: "15%" }}
        />
        <img
          src={ladybag}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.5 }}>
        <img
          src={dolphin}
          style={{ display: "block", width: "30%", marginLeft: "70%" }}
        />

        <img
          src={ladybag}
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.7 }}>
        <img
          src={cat}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.7 }}>
        <img
          src={cat}
          style={{ display: "block", width: "20%", marginLeft: "10%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.9} speed={0.5} style={{ opacity: 0.7 }}>
        <img
          src={butterflies}
          style={{ display: "block", width: "50%", marginLeft: "30%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} factor={1.8}>
        <ParallaxLayer offset={offsetGallery} speed={0.5} factor={2.2}>
          <div style={{ padding: "0 15px" }}>
            <Gallery />
          </div>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.5}
        speed={0.5}
        factor={2.5}
        horizontal={true}
      ></ParallaxLayer>

      <ParallaxLayer offset={0.95} speed={0.5} factor={2}>
        <div style={{ padding: "0 15px" }}>
          <About />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.4} speed={0.2} factor={0.2}>
        <div style={{ padding: "0 15px" }}>
          <MainTitle title={"Platon Morozov"} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={offsetLink} speed={0.5} factor={factorLink}>
        <GalleryLink />
      </ParallaxLayer>

      <Footer />
    </Parallax>
  );
}