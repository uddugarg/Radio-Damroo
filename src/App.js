import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutUsPage from './pages/AboutUsPage'
import MainPage from './pages/MainPage'
import PromotionalPage from './pages/PromotionalPage'
import TeamsPage from './pages/TeamsPage'

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import './App.css'
import ContactUsPage from './pages/ContactUsPage'

function App() {

  const location = useLocation()

  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(location)
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
          {location.pathname === "/" &&
            <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          }
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {/* {Loaded ? null : <Loader />} */}
              <Routes>
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/promotion" element={<PromotionalPage />} />
                <Route path="/team" element={<TeamsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route exact path="/" element={<MainPage />} />
              </Routes>
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App