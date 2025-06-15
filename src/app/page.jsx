import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/techStack";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
