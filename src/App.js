import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Rules } from "./Rules";
import { Whitelist } from "./Whitelist";
import { Information } from "./Information";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/whitelist" element={<Whitelist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
