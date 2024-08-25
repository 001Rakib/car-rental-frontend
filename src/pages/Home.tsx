import FeaturedCars from "@/components/featuredCars/FeaturedCars";
import Hero from "@/components/hero/Hero";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
