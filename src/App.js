import "./App.css";
import Header from "./Components/Header_Components/Header";
import Categories from "./Components/Categories/Categories";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Download from "./Components/Download";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Cards />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
