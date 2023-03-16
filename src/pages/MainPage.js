import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Loader from "../components/Loader";
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";
import Home from "../sections/Home";
import GlobalStyles from "../styles/GlobalStyles";
import { dark } from "../styles/Themes";

import '../App.css'
import About from "../sections/About";
import RecordingsAndStats from "../sections/RecordingsAndStats";
import RadioStation from "../sections/RadioStation";
import Marquee from "../sections/Marquee";
import Footer from "../sections/Footer";
import Team from "../sections/Team";
import Promotion from "../sections/Promotion";
import Banner from "../components/Banner";

function MainPage() {

  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {/* {Loaded ? null : <Loader />} */}

              <Banner />
              <Home key='home' />
              <About key="about" />
              <RecordingsAndStats key='recordingAndStats' />
              <RadioStation key='radioStation' />
              <Marquee key='marquee' />
              <Team />
              <Promotion />
              <Footer key='footer' />

            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
