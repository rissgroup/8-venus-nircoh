import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
<div className="2xl:h-screen">
      <Navbar />
      <Hero />
      <Footer />
      </div>
    </>
  );
}
