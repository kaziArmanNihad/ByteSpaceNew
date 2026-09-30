import Hero from "../../components/homePageComponents/Hero.jsx";
import Brands from "../../components/homePageComponents/Brands.jsx";
import Feature from "../../components/homePageComponents/Feature.jsx";
import LearningPaths from "../../components/homePageComponents/LearningPaths.jsx";
import GrowthAndManagement from "../../components/homePageComponents/GrowthAndManagement.jsx";
import Banner from "../../components/homePageComponents/Banner.jsx";
import Testimonials from "../../components/homePageComponents/Testimonials.jsx";


function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Feature />
      <LearningPaths />
      <GrowthAndManagement />
      <Banner />
      <Testimonials />
    </>
  );
}

export default Home;
