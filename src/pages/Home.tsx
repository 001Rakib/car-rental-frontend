import FeaturedCars from "@/components/featuredCars/FeaturedCars";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Testimonial from "@/components/testimonial/Testimonial";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
