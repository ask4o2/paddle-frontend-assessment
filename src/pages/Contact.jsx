import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <div className="relative z-10">
      {/* Header */}
      <Header text="text-white" buttonBg="md:bg-blue-700" />

      {/* banner */}
      <Banner />

      {/* contact us */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
