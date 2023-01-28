import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ReactLoading from "react-loading";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <ReactLoading type="spinningBubbles" color="red" width={100} height={100} />
        </div>
      ) : (
        <div>
          <Header />
          <main>
            <Home />
            <About />
            <Menu />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
