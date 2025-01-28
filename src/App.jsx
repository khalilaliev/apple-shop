import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
