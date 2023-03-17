import React from "react";
import styled from "styled-components";

import img1 from "../assets/about3.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about1.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
    color: 'white';
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      opacity: 0.5
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    color: white;
  }
`;

const About = () => {
    return (
        <Section id="fixed-target" className="about">
            <Title
                data-scroll
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
            >
                About Us
            </Title>
            <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                89.6 radio damroo etawah first community radio station CR is radio broadcasting with the objective of serving the cause of the community in the service area by involving members of the community in the broadcast of their programmes.
                <br />
                <br />
                It affords a unique advantage of receiving transmission through low cost, battery operated portable receiving sets.
                The Ministry encourages setting up the CR, as it promises to provide an opportunity to the local communities to express themselves, share their views and particularly empower the women, youth and the marginalized groups to take part in local self governance and overall socio-economic and cultural development of the area.
                <br />
                <br />
                <a href="/about" className="inline-block bg-primary py-2 px-3 mt-5 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize font-poppins">Read More..</a>
            </Left>

            <Right>
                <img width="400" height="600" src={img1} alt="About Us" />
                <img
                    width="400"
                    height="600"
                    className="small-img-1"
                    src={img2}
                    alt="About Us"
                    data-scroll
                    data-scroll-speed="5"
                />
                <img
                    width="400"
                    height="600"
                    className="small-img-2"
                    src={img3}
                    alt="About Us"
                    data-scroll
                    data-scroll-speed="-2"
                />
            </Right>
        </Section>
    );
};

export default About;
