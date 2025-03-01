import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { Video } from "@/components/Video";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Greenfield Advantages"
        title="Why Choose Our Training Camps"
      >
        Greenfield offers premium running and cycling camps in Northern
        Portugal, designed for amateur and professional athletes. Enjoy tailored
        training, nutritious meals, and guided tours of stunning landscapes.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="See It in Action"
        title="Discover Your Training Experience"
      >
        Watch this video to see what a Greenfield camp looks like. From intense
        workouts to scenic tours, our camps are proven to boost performance and
        enjoyment for athletes.
      </SectionTitle>

      <Video videoId="y_tYH0a3PYg" />

      <SectionTitle preTitle="Testimonials" title="What Athletes Say About Us">
        Hear from athletes who’ve trained with Greenfield. Their stories
        highlight how our camps elevate skills, stamina, and love for the sport.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Your Questions Answered">
        Find answers to common questions about our training camps here. This
        helps you plan your trip and reduces the need for extra support
        inquiries.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
