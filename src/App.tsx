import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CollectionsCatalog } from './components/CollectionsCatalog';
import { LookbookSection } from './components/LookbookSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppEnquiryModal } from './components/WhatsAppEnquiryModal';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('');

  const handleOpenEnquiryModal = (productName?: string) => {
    setSelectedProductForEnquiry(productName || '');
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#f8d070]">
      {/* Navigation Header */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* 2. About The Business */}
        <AboutSection />

        {/* 3. Products & Collections Catalog */}
        <CollectionsCatalog />

        {/* 4. Royal Lookbook Outfit Builder */}
        <LookbookSection />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Verified Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* 7. Showroom & Product Gallery */}
        <GallerySection />

        {/* 8. Store Location, Google Map, & Hours */}
        <StoreLocationSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Contact & WhatsApp Enquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (Sticky Mobile Bar + Desktop WhatsApp) */}
      <FloatingActions onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

      {/* Interactive WhatsApp Enquiry Modal */}
      <WhatsAppEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialProduct={selectedProductForEnquiry}
      />
    </div>
  );
}
