import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../assets/logo.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <div class="container mx-auto lg:mb-0 relative mb-8 grid gap-1 grid-cols-12">
        <div class="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative">
          <div data-v-a32cb6a4="" class="relative flex flex-row items-start border-collapse lg:absolute lg:top-0 lg:left-0 lg:flex-col">
            <a data-v-a32cb6a4="" aria-label="Share to Facebook" href="https://www.facebook.com/profile.php?id=100089006416469&mibextid=ZbWKwL" class="border-gray-400 border-2 text-contrast-none w-12 h-12 text-2xl text-center justify-center flex" target="_blank" rel="noopener">
              <FaFacebookF className='text-center mt-3 text-gray-500' />
            </a>
            <a data-v-a32cb6a4="" aria-label="Share to Instagram" href="https://instagram.com/radio_damroo?igshid=ZDdkNTZiNTM=" class="border-2 border-gray-400 text-contrast-none w-12 h-12 -ml-px text-2xl text-center justify-center flex lg:ml-0 lg:-mt-px" target="_blank" rel="noopener">
              <RiInstagramFill className='text-center mt-3 text-gray-500' />
            </a>
            <a data-v-a32cb6a4="" aria-label="Share to LinkedIn" href="https://www.linkedin.com/company/radio-damroo/" class="border-2 border-gray-400 text-contrast-none w-12 h-12 -ml-px text-2xl text-center justify-center flex lg:ml-0 lg:-mt-px" target="_blank" rel="noopener">
              <FaLinkedinIn className='text-center mt-3 text-gray-500' />
            </a>
          </div>
        </div>
      </div>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
        />
        <h3 data-scroll data-scroll-speed="-1">
          Radio Damroo
        </h3>
        <p data-scroll data-scroll-speed="-1" className="font-poppins">
        <b>Address:</b> Vikas colony phase 3 pakka bagh Etawah, Uttar Pradesh, India (Pincode: 206001)
        </p>
        <p data-scroll data-scroll-speed="-1" className="font-poppins">
          <b>Phone:</b> +91-##########
        </p>
        <p data-scroll data-scroll-speed="-1" className="font-poppins">
          <b>Email:</b> Info@radiodamroo.com
        </p>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true">
            <a href='/'>home</a>
          </li>
          <li aria-hidden="true">
            <a href='/about'>about</a>
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#radio")}>
            radio
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            <a href='/promotion'>promotion</a>
          </li>
          <li>
            <a href="/team" rel="noreferrer">
              team
            </a>
          </li>
          <li>
            <a href="/contact" rel="noreferrer">
              contact us
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2023. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a
              // href="http://youtube.com/codebucks"
              target={"_blank"}
              rel="noreferrer"
            >
              Procrastinate Coder
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
