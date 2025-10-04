import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
