import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import background from '../assets/radio-bg.jpeg'

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(rgba(255, 209, 2, 0.4), rgba(237, 28, 36, 0.5)), url("${background}") top center;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 451.006 451.006">
        <g>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M422.438,125.506h-54.289V89.348c0-17.096-13.909-31.005-31.005-31.005H113.862c-17.096,0-31.005,13.909-31.005,31.005
		          v36.158H28.568C12.816,125.506,0,138.322,0,154.074v210.021c0,15.753,12.816,28.568,28.568,28.568h393.87
		          c15.752,0,28.568-12.816,28.568-28.568V154.074C451.006,138.322,438.19,125.506,422.438,125.506z M113.862,73.343h223.282
		          c6.953,0,12.868,4.464,15.072,10.671H98.79C100.995,77.807,106.91,73.343,113.862,73.343z M97.857,99.014h255.292v26.492H97.857
		          V99.014z M436.006,364.095c0,7.482-6.087,13.568-13.568,13.568H28.568c-7.481,0-13.568-6.087-13.568-13.568V154.074
		          c0-7.482,6.087-13.568,13.568-13.568h393.87c7.481,0,13.568,6.087,13.568,13.568V364.095z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M88.962,242.044c-33.999,0-61.658,27.66-61.658,61.658c0,33.998,27.66,61.658,61.658,61.658
		          c33.998,0,61.658-27.66,61.658-61.658C150.62,269.703,122.96,242.044,88.962,242.044z M88.962,350.36
		          c-25.728,0-46.658-20.931-46.658-46.658c0-25.728,20.931-46.658,46.658-46.658c25.727,0,46.658,20.931,46.658,46.658
		          C135.62,329.429,114.689,350.36,88.962,350.36z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M68.447,235.096c22.686,0,41.143-18.457,41.143-41.143S91.133,152.81,68.447,152.81c-22.687,0-41.143,18.457-41.143,41.143
		          S45.76,235.096,68.447,235.096z M68.447,167.81c14.415,0,26.143,11.728,26.143,26.143s-11.728,26.143-26.143,26.143
		          c-14.416,0-26.143-11.728-26.143-26.143S54.031,167.81,68.447,167.81z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M362.044,242.044c-33.998,0-61.658,27.66-61.658,61.658c0,33.998,27.66,61.658,61.658,61.658
		          c33.999,0,61.658-27.66,61.658-61.658C423.703,269.703,396.043,242.044,362.044,242.044z M362.044,350.36
		          c-25.727,0-46.658-20.931-46.658-46.658c0-25.728,20.931-46.658,46.658-46.658c25.728,0,46.658,20.931,46.658,46.658
		          C408.703,329.429,387.772,350.36,362.044,350.36z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M362.044,278.044c-14.147,0-25.658,11.51-25.658,25.658s11.51,25.658,25.658,25.658c14.148,0,25.658-11.51,25.658-25.658
		          S376.192,278.044,362.044,278.044z M362.044,314.36c-5.876,0-10.658-4.781-10.658-10.658c0-5.877,4.781-10.658,10.658-10.658
		          c5.877,0,10.658,4.781,10.658,10.658C372.703,309.579,367.921,314.36,362.044,314.36z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M88.961,278.044c-14.147,0-25.658,11.51-25.658,25.658s11.51,25.658,25.658,25.658c14.148,0,25.658-11.51,25.658-25.658
		          S103.109,278.044,88.961,278.044z M88.961,314.36c-5.876,0-10.658-4.781-10.658-10.658c0-5.877,4.781-10.658,10.658-10.658
		          c5.877,0,10.658,4.781,10.658,10.658C99.62,309.579,94.838,314.36,88.961,314.36z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M382.56,152.81c-22.686,0-41.143,18.457-41.143,41.143s18.457,41.143,41.143,41.143c22.687,0,41.143-18.457,41.143-41.143
              S405.246,152.81,382.56,152.81z M382.56,220.096c-14.415,0-26.143-11.728-26.143-26.143s11.728-26.143,26.143-26.143
              c14.416,0,26.143,11.728,26.143,26.143S396.975,220.096,382.56,220.096z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M275.466,232.664H175.54c-4.142,0-7.5,3.358-7.5,7.5v72.078c0,4.142,3.358,7.5,7.5,7.5h99.926c4.142,0,7.5-3.358,7.5-7.5
		          v-72.078C282.966,236.022,279.608,232.664,275.466,232.664z M267.966,304.742H183.04v-57.078h84.926V304.742z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M202.006,282.442c2.767,1.824,6.509,1.623,9.035-0.539c2.233-1.911,3.16-5.064,2.303-7.879
		          c-0.951-3.125-3.911-5.317-7.178-5.323c-3.133-0.006-5.998,2.036-7.054,4.973C197.951,276.903,199.192,280.52,202.006,282.442
		          C202.416,282.712,201.596,282.162,202.006,282.442z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M237.916,279.072c0.363,0.906,0.92,1.749,1.62,2.43c2.816,2.899,7.784,2.899,10.6,0c2.898-2.815,2.899-7.784,0-10.6
		          c-2.814-2.897-7.786-2.897-10.6,0C237.397,272.98,236.763,276.339,237.916,279.072
		          C238.096,279.522,237.726,278.622,237.916,279.072z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M132.503,176.664h186c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-186c-4.142,0-7.5,3.358-7.5,7.5
		          S128.361,176.664,132.503,176.664z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M260.006,204.664c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H169c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H260.006
		          z"/>
          <motion.path variants={pathVariants}
            initial="hidden"
            animate="visible" d="M288.936,194.292c-2.012-4.77-8.54-6.223-12.23-2.43c-4.279,4.157-1.823,11.575,3.913,12.667
		          C286.443,205.637,291.056,199.703,288.936,194.292C288.746,193.842,289.116,194.752,288.936,194.292z"/>
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        89.6 Radio Damroo
      </Text>
    </Container>
  );
};

export default Loader;
