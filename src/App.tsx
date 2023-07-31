import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header title={"Company Name"} />
      <Hero />
      <Card />
    </>
  );
}

export default App;
