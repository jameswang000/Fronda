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
    <div className="min-w-full flex flex-col items-center bg-frondaSageGreen font-primary">
      <NavBar />
      <Hero />
      <FeaturedOfferings />
      <OurStory />
      <SellingPoints />
      <Reviews />
      <ContactForms />
      <Footer />
    </div>
  );
};

export default Homepage;
