import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Methodology from "@/sections/Methodology";
import WhyUs from "@/sections/WhyUs";
import Portfolio from "@/sections/Portfolio";
import TechStack from "@/sections/TechStack";
import FAQ from "@/sections/FAQ";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import SocialFeed from "@/sections/SocialFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Services />
        <Methodology />
      </div>
      <WhyUs />
      <div className="bg-[#000000]">
        <Portfolio />
        <TechStack />
      </div>
      <SocialFeed />
      <div className="bg-white">
        <FAQ />
        <Testimonials />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
