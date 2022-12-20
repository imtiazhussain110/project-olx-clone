import "./App.css";
import "./ProductSection.css";
import Header from "./Components/Header_Components/Header";
import Categories from "./Components/Categories/Categories";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Download from "./Components/Download";
import Product from "./Components/Product_Page/Product";
import { Route, Routes } from "react-router-dom";
import SellForm from "./Components/SellForm/SellForm";
import Login from "./Components/Login-SignUp/Login";
import SignUp from "./Components/Login-SignUp/SignUp";
import { useState } from "react";
import ProductListings from "./Components/ProductListing/ProductListings";

function App() {
  // to get data from it's child component (Cards.jsx)
  const [cardData, setCardData] = useState(null);
  const [categoryIndex, setcategoryindex] = useState();
  const getCardIndex = (data) => {
    setCardData(data);
  };

  const categoryId = (id) => {
    setcategoryindex(id);
  };
  console.log(categoryIndex);
  return (
    <>
      <div className="App">
        {/* <SignUp /> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                {/* recieving data from Cards.jsx */}
                <Cards onClick={getCardIndex} />
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
                <Categories getCategoryId={categoryId} />
                {/* sending data to Product.jsx */}
                <Product cardIndex={cardData} />
                <Footer />
              </>
            }
          />

          <Route
            path="/productlistings"
            element={
              <>
                <Header />
                <Categories />
                <ProductListings
                  onClick={getCardIndex}
                  getCategory={categoryIndex}
                />
                <Footer />
              </>
            }
          />

          <Route path="/sellForm" element={<SellForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
