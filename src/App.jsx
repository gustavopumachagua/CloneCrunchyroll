import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import OfflineAlert from "./components/OfflineAlert";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroCards from "./components/HeroCards/HeroCards";
import Search from "./pages/Search";
import Series from "./pages/Series";
import NewAnime from "./components/NewAnime/NewAnime";
import Watch from "./pages/Watch";
import GenrePage from "./pages/GenrePage";
import PremiumPage from "./pages/PremiumPage";
import GenreListPage from "./pages/GenreListPage";
import RegisterPage from "./pages/RegisterPage";
import AccederPage from "./pages/AccederPage";
import NewsPage from "./pages/NewsPage";
import AnimeAwards from "./pages/AnimeAwards";
import PopularAnime from "./pages/PopularAnime";
import NovedadesPage from "./pages/NovedadesPage";
import SeasonalSimulcasts from "./pages/SeasonalSimulcasts";
import AlphabeticalAnime from "./pages/AlphabeticalAnime";
import ReleaseCalendar from "./pages/ReleaseCalendar";
import MusicVideos from "./pages/MusicVideos";
import AnimeGames from "./pages/AnimeGames";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutSection from "./pages/AboutSection";
import TermsOfUse from "./pages/TermsOfUse";
import CookieConsent from "./pages/CookieConsent";
import PressContact from "./pages/PressContact";
import GetAppsSection from "./pages/GetAppsSection";
import JobPage from "./pages/JobPage";
import GiftCardRedeemPage from "./pages/GiftCardRedeemPage";
import EventsAndExperiences from "./pages/EventsAndExperiences";
import FooterAccount from "./components/Account/FooterAccount";
import HeaderAccount from "./components/Account/HeaderAccount";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="App">
        <OfflineAlert />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <Hero />
                </div>
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <HeroCards />
                </div>
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <NewAnime animeId={20} />
                </div>

                <Footer />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <Search />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <Series />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/episode-details"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <Watch />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/genre/:genreId"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <GenrePage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/genre/:genreId/all"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <GenreListPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/premium"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <PremiumPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <HeaderAccount />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <RegisterPage />
                </div>
                <FooterAccount />
              </>
            }
          />
          <Route
            path="/acceder"
            element={
              <>
                <HeaderAccount />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <AccederPage />
                </div>
                <FooterAccount />
              </>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <>
                <HeaderAccount />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <ResetPassword />
                </div>
                <FooterAccount />
              </>
            }
          />
          <Route
            path="/NewsPage"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <NewsPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/AnimeAwards"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <AnimeAwards />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/EventsAndExperiences"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <EventsAndExperiences />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/PopularAnime"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <PopularAnime />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Novedades"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <NovedadesPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Alfabetico"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <AlphabeticalAnime />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/SeasonalSimulcasts"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <SeasonalSimulcasts />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/ReleaseCalendar"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <ReleaseCalendar />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/MusicVideos"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <MusicVideos />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/AnimeGames"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <AnimeGames />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Acerca"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <AboutSection />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/centroayuda"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <HelpCenter />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/terminouso"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <TermsOfUse />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/politicaprivacidad"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <PrivacyPolicy />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/cookies"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <CookieConsent />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/contactoprensa"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <PressContact />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/aplicaciones"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <GetAppsSection />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/canjeartarjeta"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <GiftCardRedeemPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/empleo"
            element={
              <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <JobPage />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
