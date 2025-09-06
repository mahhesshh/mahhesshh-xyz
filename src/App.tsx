import "./App.css";
import Loader from "./components/Loader";
import Terminal from "./components/terminal";
import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : <Terminal />}
      <Analytics />
    </div>
  );
}

export default App;