import NavBar from "./NavBar";
import Hero from "./Hero";
import FeaturedOfferings from "./FeaturedOfferings";
import OurStory from "./OurStory";
import SellingPoints from "./SellingPoints";
import Reviews from "./Reviews.tsx";
import ContactForms from "./ContactForms.tsx";
import Footer from "./Footer.tsx";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedOfferings />
      <OurStory />
      <SellingPoints />
      <Reviews />
      <ContactForms />
      <Footer />
    </>
  );
};

export default Homepage;
