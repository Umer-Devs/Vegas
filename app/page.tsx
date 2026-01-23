import AboutSection from "@/componenets/AboutSection";
import Hero from "@/componenets/Hero";
import Navbar from "@/componenets/Navbar";
import CtaOne from "@/componenets/CtaOne";
import Services from "@/componenets/Services";
import ImgAttachment from "@/componenets/ImgAttachment";
import CtaTwo from "@/componenets/CtaTwo";
import BookingRide from "@/componenets/BookingRide";
import Footer from "@/componenets/Footer";


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">

        <Hero />
        <AboutSection />
        <CtaOne />
        <Services />
        <CtaTwo />
        <ImgAttachment />
        <BookingRide />
      </main>
      <Footer />

    </>
  );
}
