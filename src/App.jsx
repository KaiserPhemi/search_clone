// react libraries
import React from "react";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

/**
 * @desc app entry point
 */
const App = () => {
  return (
    <div className="main-app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
