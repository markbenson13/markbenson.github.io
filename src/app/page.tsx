import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero-banner" className="w-100 h-screen bg-blue"></div>
      <Footer />
    </>
  );
}
