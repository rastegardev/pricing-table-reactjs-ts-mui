import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header title={"Company Name"} />
      <Hero />
      <Cards />
    </>
  );
}

export default App;
