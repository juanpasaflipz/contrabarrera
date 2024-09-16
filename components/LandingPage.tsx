import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import FeaturedTorerosSection from './FeaturedTorerosSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
import Head from 'next/head';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100 font-sans">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <NewsSection />
        <FeaturedTorerosSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;