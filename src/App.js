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
import ProductListings from "./Components/ProductListing/ProductListings";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
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
              path="/products/:id"
              element={
                <>
                  <Header />
                  <Categories />
                  <Product />
                  <Footer />
                </>
              }
            />

            <Route
              path="/:category"
              element={
                <>
                  <Header />
                  <Categories />
                  <ProductListings />
                  <Footer />
                </>
              }
            />

            <Route path="/sellForm" element={<SellForm />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
