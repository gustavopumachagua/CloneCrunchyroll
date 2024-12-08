import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HeroCards from "./components/HeroCards/HeroCards";
import Search from "./pages/Search";
import Series from "./pages/Series";
import NewAnime from "./components/NewAnime/NewAnime";
import Watch from "./pages/Watch"; // Importa el nuevo componente

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HeroCards />
                <div className="min-h-screen bg-gray-900 text-white p-4">
                  <NewAnime animeId={20} />
                </div>
              </>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
          <Route path="/episode-details" element={<Watch />} />{" "}
          {/* Nueva ruta */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
