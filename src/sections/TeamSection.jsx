import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import img1 from '../assets/team/shouhadra-2.png';
import img2 from '../assets/team/aryan-yadav.png';
import img3 from '../assets/team/rahul.png';
import img4 from '../assets/team/Komal-Nahta.png';
import img5 from '../assets/team/ravi-sharma.JPG';

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 50%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img className="h-16 w-16 rounded-full" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const TeamSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);


  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        What Team Says!
      </Title>

      <Container ref={ScrollingRef}>
        <Item>
          <img className="h-16 w-16 rounded-full" src={img1} alt='' />
          <div className='mt-5 mb-5 font-poppins text-center'>
            <h2 className='font-bold'>Shouhadra Dixit</h2>
            <h4 className='text-sm text-gray-300'>Ceo &amp; Founder</h4>
          </div>
          <span className='font-poppins text-sm'>
            <b className='text-2xl'>“</b>My experience which I earned while working for various top companies in the industry like <b>AAJ TAK,
              ZEE NEWS, RADIOs </b>etc inspired me and guided me towards Radio Damroo. I can definitely say that
            <b>’Radio Damroo’</b> will be a concept where people will not only <b>have entertainment but will also
              have knowledge about the area</b> they live in. Interesting fact is if you ask any one inn Etawah
            about what is happening in the world they will tell you the complete brief but only a few of them will
            have knowledge about what is happening near them, or what are the services, opportunities etc in their
            particular area. <b>Damroo will exactly fill this GAP!</b><b className='text-2xl'>”</b>
          </span>
        </Item>
        <Item>
          <img className="h-16 w-16 rounded-full" src={img2} alt='' />
          <div className='mt-5 mb-5 font-poppins text-center'>
            <h2 className='font-bold'>Aryan Yadav</h2>
            <h4 className='text-sm text-gray-300'>Co-Founder &amp; Vice President</h4>
          </div>
          <span className='font-poppins text-sm text-center'>
            <b className='text-2xl'>“</b>We will always try to become the voice of Etawah<b className='text-2xl'>”</b>
          </span>
        </Item>
        <Item>
          <img className="h-16 w-16 rounded-full" src={img3} alt='' />
          <div className='mt-5 mb-5 font-poppins text-center'>
            <h2 className='font-bold'>Rahul Tiwari</h2>
            <h4 className='text-sm text-gray-300'>CTO</h4>
          </div>
          <span className='font-poppins text-sm'>
            <b className='text-2xl'>“</b>Etawah has always played one of the most important part in UP politics, there’s even a saying about
            Etawah that <b>“Yahan har dusra banda neta hai”</b>. If you ask anyone in Etawah about any political
            related situation happening in India, they’ll provide you a thorough detail. And observing this
            <b>passion of Etawah towards politics and the nation</b> itself and seeing a completely distinctive
            point of view of Etwaha I strongly believe that <b>89.6 Etawah’s own Radio Damroo</b> will play a
            <b>very crucial role and even guide and educate the society with a pinch of Entertainment!</b><b className='text-2xl'>”</b>
          </span>
        </Item>
        <Item>
          <img className="h-16 w-16 rounded-full" src={img4} alt='' />
          <div className='mt-5 mb-5 font-poppins text-center'>
            <h2 className='font-bold'>Komal Nahta</h2>
            <h4 className='text-sm text-gray-300'>Programming Head &amp; Show Host</h4>
          </div>
          <span className='font-poppins text-sm'>
            <b className='text-2xl'>“</b>Komal Nahta is an Indian film trade analyst. Nahta is the publisher of "Film Information" and also a
            television show host. He is an anchor of the trade show <b>ETC Bollywood Business on the Bollywood TV
              channels ETC and Zee Cinema</b>. He is in the advisory board of Cinema Capital and other top
            companies. <b>And he truly believes that Damroo will bring alot of change</b>.<b className='text-2xl'>”</b>
          </span>
        </Item>
        <Item>
          <img className="h-16 w-16 rounded-full" src={img5} alt='' />
          <div className='mt-5 mb-5 font-poppins text-center'>
            <h2 className='font-bold'>Ravi Sharma</h2>
            <h4 className='text-sm text-gray-300'>Programming Manager</h4>
          </div>
          <span className='font-poppins text-sm'>
            <b className='text-2xl'>“</b>Ravi sharma Worked for Ishq FM, My FM believes that "With the launch of Damroo, entertainment will
            have a new definition in Etawah"<b className='text-2xl'>”</b>
          </span>
        </Item>
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        "Radio affects most intimately, person-to-person, offering a world of unspoken communication between writer-speaker and the listener."
        -Marshall McLuhan
        <br />
        <br />
        "With radio, the listener absorbs everything."
        -Bob Edwards
        <br />
        <br />
        "In radio, you have two tools. Sound and silence."
        -Ira Glass
      </Text>
    </Section>
  );
};

export default TeamSection;
