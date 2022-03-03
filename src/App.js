import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
