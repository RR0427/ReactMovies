import "./css/App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/favourites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  const movieNumber = 2;
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;
