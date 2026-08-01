import Image from "next/image";
import styles from "./page.module.css";
import Navabar from "@/Components/Navabar/Navabar";
import Hero from "@/Components/Hero/Hero";
import ServiceCard from "@/Components/Services/ServiceCard";
import ProtfolioCard from "@/Components/Protfolio/ProtfolioCard";
import Ux from "@/Components/assets/ux.jpg";
import Web from "@/Components/assets/web.jpg";
import Contact from "@/Components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Navabar/>
      <Hero/>
      <ServiceCard/>
      <ProtfolioCard/>
      <Contact/>
    </div>
  );
}
