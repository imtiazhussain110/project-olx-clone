import React from "react";
import "./App.css";
import "./ProductSection.css";
import Header from "./Components/Header_Components/Header";
import Categories from "./Components/Categories/Categories";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Download from "./Components/Download";
import Product from "./Components/Product_Page/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                <Cards />
                <Download />
                <Footer />
              </>
            }
          />

          <Route
            path="/product"
            element={
              <>
                <Header />
                <Categories />
                <Product />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
