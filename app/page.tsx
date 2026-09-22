import HeroSection from "@/home-sections/hero-section";
import TrainersSection from "@/home-sections/trainers-section";
import WhyChooseUsSection from "@/home-sections/why-choose-us-section";
import ProgramsSection from "@/home-sections/programs-section";
import TestimonialsSection from "@/home-sections/testimonials-section";
import PricingSection from "@/home-sections/pricing-section";
import CallToAction from "@/home-sections/call-to-action";
import FooterSection from "@/home-sections/footer-section";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b">
       <HeroSection/>
       <TrainersSection />
       <WhyChooseUsSection />
       <ProgramsSection />
       <TestimonialsSection />
       <PricingSection />
       <CallToAction />
       <FooterSection />
    </div>
  );
}
