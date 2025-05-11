'use client';

import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import NewsletterForm from '@/components/organisms/News';
import OccasionSection from '@/components/organisms/OccasionSection';
import ProductSection from '@/components/organisms/Products';
import TestimonialCarousel from '@/components/organisms/Refs';
import ServicesSection from '@/components/organisms/Services';
import VenueServices from '@/components/organisms/VenueServices';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OccasionSection />ç
      <VenueServices />
      <ServicesSection />
      <ProductSection />
      <InfoSection />
      <TestimonialCarousel />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
