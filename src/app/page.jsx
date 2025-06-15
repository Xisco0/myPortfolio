"use client";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/techStack";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import { useEffect } from 'react';
import AOS from './constant/aos';
import "./components/site/styles/aos.css";



export default function Home() {
  useEffect(() => {
  AOS.init({
    easing: 'ease-in-out-sine',
  });
}, []);


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
