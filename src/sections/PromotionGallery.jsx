import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { AiFillPlayCircle } from 'react-icons/ai';

import img1 from "../assets/celebrities/rajat-kapoor.jpeg";
import img2 from "../assets/celebrities/himesh-reshamiya.jpeg";
import img3 from "../assets/celebrities/anil-kapoor.jpg";
import img4 from "../assets/celebrities/ishaan-khataar.jpg";
import img5 from "../assets/celebrities/maithili-thakur.jpeg";
import img6 from "../assets/celebrities/arjun-kapoor.jpeg";
import img7 from "../assets/celebrities/sidhhant-chaturvedi.jpeg";
import img8 from "../assets/celebrities/rajkumar-rao.jpeg";
import img9 from "../assets/celebrities/ananya-panday.jpg";
import img10 from "../assets/celebrities/jackie-shroff.jpg";
import img11 from "../assets/celebrities/pankaj-tripathi.jpg";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "", link }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1 className="font-poppins">{title}</h1>
      <a target="_blank" href={link} className='flex justify-center font-poppins items-center'>Watch Video <AiFillPlayCircle className="ml-3" /></a>
    </Item>
  );
};

const PromotionGallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="PromotionGallery">
      <Title data-scroll data-scroll-speed="-1">
        Promotion Gallery
      </Title>
      <Left>
        <p>
          Seeing the passion and efforts we hold &amp; do. Various people in the industry are encouraging and supporting us!
          <br /> <br />
          Here's A Glimpse towards our Support 🙏
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Rajat Kapoor" link="https://www.instagram.com/p/CpnJURfInum/" />
        <Product img={img2} title="Himesh Reshammiya" link="https://www.instagram.com/p/CpDCNbrKWe3/" />
        <Product img={img3} title="Anil Kapor" link="https://www.instagram.com/p/Co2GhnZqYcN/" />
        <Product img={img4} title="Ishaan Khatter" link="https://www.instagram.com/p/CoZ7387q-tW/" />
        <Product img={img5} title="Maithili Thakur" link="https://www.instagram.com/p/CoH0jT7oqyv/" />
        <Product img={img6} title="Arjun Kapoor" link="https://www.instagram.com/p/Cn9iFZ5Iqde/" />
        <Product img={img7} title="Siddhant Chaturvedi" link="https://www.instagram.com/p/Cn12iazqNKR/" />
        <Product img={img8} title="RajKumar Rao" link="https://www.instagram.com/p/CnuBgEWhbBW/" />
        <Product img={img9} title="Ananya Pandey" link="https://www.instagram.com/p/Cno-3AbBnrN/" />
        <Product img={img10} title="Jackie Shroff" link="https://www.instagram.com/p/CnjznzxBqwa/" />
        <Product img={img11} title="Pankaj Tripathi" link="https://www.instagram.com/p/CneplZdBVem/" />
      </Right>
    </Section>
  );
};

export default PromotionGallery;
