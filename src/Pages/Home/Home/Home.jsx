import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonia from "../Testimonial/Testimonia";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Products />
      <Team />
      <Features />
      <Testimonia />
    </div>
  );
};

export default Home;
