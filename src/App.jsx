import NavigationBar from "./components/common/NavigationBar";
import "./App.css";
import PromotionHome from "./components/home/promotion page/PromotionHome";
import BrowseRange from "./components/home/browse-range/BrowseRange";
import Footer from "./components/home/footer/Footer";
import Products from "./components/home/product/Products";

function App() {
  return (
    <>
      <NavigationBar />
      <PromotionHome />
      <BrowseRange />
      <Products />
      <Footer />
    </>
  );
}

export default App;
