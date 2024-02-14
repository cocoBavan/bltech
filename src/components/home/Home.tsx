import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Counter from "@/components/home/Counter";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import News from "@/components/home/News";
import Partners from "@/components/home/Partners";
import Portfolio from "@/components/home/Portfolio";
import Resume from "@/components/home/Resume";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import Subscribe from "@/components/home/Subscribe";
import Testimonials from "@/components/home/Testimonials";

import "./css/home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Counter />
      <Skills />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Partners />
      <News />
    </div>
  );
};

export default Home;
