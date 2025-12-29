import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TopMembers from "@/components/TopMembers";
import Testimonials from "@/components/Testimonials";
import WhyChooseSoulsync from "@/components/WhyChooseSoulsync";
import SuccessStories from "@/components/SuccessStories";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <HowItWorks />
      <TopMembers />
      <Testimonials />
      <WhyChooseSoulsync />
      <SuccessStories />
      <DownloadApp />
      <Footer />
    </>
  );
}
