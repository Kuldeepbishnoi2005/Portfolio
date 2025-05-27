import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kuldeep BIshnoi | Frontend Developer</title>
        <meta name="description" content="Kuldeep Bishnooi is a frontend developer specializing in creating beautiful, responsive web applications with HTML, CSS, JAVASCRIPT, REACT, MYSQL, DATABASE and modern web technologies." />
      </Helmet>

      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;