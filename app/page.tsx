"use client";

import Header from './components/Header';
import MainSection from './components/MainSection';
import WhatAndHow from './components/WhatAndHow';
import Footer from './components/Footer';
import SEOContent from './components/SEOContent';
import StructuredData from './components/StructuredData';
import { useToast } from './components/Toast';

export default function Home() {
  const { ToastContainer } = useToast();

  return (
    <main className="min-h-screen text-white">
      {/* Structured Data for SEO */}
      <StructuredData />

      {/* Header Component */}
      <Header />

      {/* Main Section Component */}
      <MainSection />

      {/* What and How to Use Section */}
      <WhatAndHow />

      {/* SEO Content and FAQ */}
      <SEOContent />

      {/* Footer Component */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer />
    </main>
  );
}
