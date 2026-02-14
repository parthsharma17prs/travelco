import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroCanvas from './components/HeroCanvas';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import GenericPage from './components/GenericPage';
import TravelPage from './components/TravelPage';
import ServicePage from './components/ServicePage';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage'; // Added GalleryPage import
import ContactPage from './components/ContactPage'; // Added ContactPage import
import JournalPage from './components/JournalPage'; // Added JournalPage import
import LoginPage from './components/LoginPage';
import RoomsPage from './components/RoomsPage';
import RoomDetailPage from './components/RoomDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import { AuthProvider } from './context/AuthContext';

function App() {
  const lenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  };

  return (
    <AuthProvider>
      <ReactLenis root options={lenisOptions}>
        <Router>
          <div className="bg-[#0c0c0c] min-h-screen text-white selection:bg-white selection:text-black font-sans">
            <Header />
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/rooms/:id" element={<RoomDetailPage />} />
              <Route path="/journal" element={<JournalPage />} /> {/* Added JournalPage route */}
              <Route path="/about" element={<GenericPage title="About Us" subtitle="Our Story" image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop" />} />
              <Route path="/dates" element={<GenericPage title="Availability" subtitle="Plan Your Stay" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop" />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/gallery" element={<GalleryPage />} /> {/* Changed to GalleryPage */}
              <Route path="/private-jets" element={
                <ServicePage
                  title="Private Aviation"
                  subtitle="Fly on Your Terms"
                  heroImage="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2574&auto=format&fit=crop"
                  description="Bypass long lines and commercial terminals. Experience the ultimate freedom of private aviation with our fleet of long-range jets, tailored catering, and seamless ground transport."
                  features={[
                    { title: "Global Reach", desc: "Access to 5,000+ airports" },
                    { title: "On-Demand", desc: "Ready in as little as 4 hours" },
                    { title: "Pet Friendly", desc: "Bring your companions" },
                    { title: "Privacy", desc: "Discrete terminals & lounges" }
                  ]}
                />
              } />
              <Route path="/villas" element={
                <ServicePage
                  title="Luxury Villas"
                  subtitle="Your Private Sanctuary"
                  heroImage="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
                  description="From clifftop estates in Amalfi to beachfront mansions in Turks & Caicos. Our portfolio of private villas offers the space, privacy, and amenities of a five-star resort, exclusively for you."
                  features={[
                    { title: "Private Staff", desc: "Chefs, butlers, & housekeeping" },
                    { title: "Exclusive Access", desc: "Beaches & golf courses" },
                    { title: "Concierge", desc: "24/7 Itinerary planning" },
                    { title: "Design", desc: "Award-winning architecture" }
                  ]}
                />
              } />
              <Route path="/experiences" element={
                <ServicePage
                  title="Curated Experiences"
                  subtitle="Memories for a Lifetime"
                  heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
                  description="Go beyond the guidebook. Whether it's a private after-hours tour of the Vatican, shark diving in South Africa, or truffle hunting in Piedmont, we unlock the world's most exclusive moments."
                  features={[
                    { title: "Access", desc: "Behind closed doors" },
                    { title: "Guides", desc: "Local experts & historians" },
                    { title: "Adventure", desc: "Custom expeditions" },
                    { title: "Culture", desc: "Immersive workshops" }
                  ]}
                />
              } />
              <Route path="/concierge" element={
                <ServicePage
                  title="Global Concierge"
                  subtitle="Your Wish, Granted"
                  heroImage="https://images.unsplash.com/photo-1565551984260-60a674488a0b?q=80&w=2574&auto=format&fit=crop"
                  description="Our dedicated lifestyle managers are at your service 24/7. From last-minute restaurant reservations to sourcing rare gifts, we handle the details so you can enjoy the journey."
                  features={[
                    { title: "24/7 Support", desc: "Always available" },
                    { title: "Dining", desc: "Priority reservations" },
                    { title: "Events", desc: "VIP tickets & access" },
                    { title: "Logistics", desc: "Seamless transfers" }
                  ]}
                />
              } />
              <Route path="/contact" element={<ContactPage />} /> {/* Changed to ContactPage */}
              <Route path="/support" element={<GenericPage title="Support" subtitle="We're Here to Help" image="https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=2574&auto=format&fit=crop" />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </ReactLenis>
    </AuthProvider>
  );
}

export default App
