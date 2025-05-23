import Hero from "./Hero";
import FeaturedOfferings from "./FeaturedOfferings";
import OurStory from "./OurStory";
import SellingPoints from "./SellingPoints";
import Reviews from "./Reviews.tsx";
import ContactForms from "./ContactForms.tsx";

const Homepage = () => {
  return (
    <>
      <Hero />
      <FeaturedOfferings />
      <OurStory />
      <SellingPoints />
      <Reviews />
      <ContactForms />
    </>
  );
};

export default Homepage;
