import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import * as styles from "./App.css";
import Simulator from "./components/Simulator/Simulator.tsx";
import Header from "./components/Header/Header.tsx";
import Demo from "./components/Demo/Demo.tsx";

function App() {
  return (
    <div className={styles.App}>
      <Router basename="/yuugiki_portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
