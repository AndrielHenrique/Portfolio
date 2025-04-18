import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}
