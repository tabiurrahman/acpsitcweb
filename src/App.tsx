
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesAnimation from "./components/ParticlesAnimation";
import TipPopup from "./components/TipPopup";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import MembersPage from "./pages/MembersPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-tech-dark flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 opacity-30">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-call-of-duty-video-game-using-a-rifle-44682-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/ede390a1-f65c-4a66-8f23-95a4b7728456.png" 
                  alt="ACPSITC Logo" 
                  className="h-28 w-28 object-contain animate-float"
                />
              </div>
              <h1 className="text-4xl font-bold font-orbitron tech-gradient-text animate-pulse">LOADING...</h1>
              <div className="mt-4 w-64 h-2 bg-tech-dark/50 rounded-full overflow-hidden">
                <div className="h-full bg-tech-purple animate-[gradient-animation_2s_ease-in-out_infinite] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <ParticlesAnimation />
            <Navbar />
            <TipPopup />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/members" element={<MembersPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
