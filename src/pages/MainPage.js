import Home from "../sections/Home";
import About from "../sections/About";
import RecordingsAndStats from "../sections/RecordingsAndStats";
import RadioStation from "../sections/RadioStation";
import Marquee from "../sections/Marquee";
import Footer from "../sections/Footer";
import Team from "../sections/Team";
import Promotion from "../sections/Promotion";
import Banner from "../components/Banner";

function MainPage() {
  return (
    <>
      <Banner />
      <Home key='home' />
      <About key="about" />
      <RecordingsAndStats key='recordingAndStats' />
      <RadioStation key='radioStation' />
      <Marquee key='marquee' />
      <Team />
      <Promotion />
      <Footer key='footer' />
    </>
  );
}

export default MainPage;
