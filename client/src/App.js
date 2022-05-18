
import Home from './pages/Home/Home';
import Announcement from './components/Announcement/Announcement';
import TopLeftBar from './components/Navbar/TopLeftBar';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products/Products';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';

import './App.css';

function App() {
  return (
    <>
        <Announcement />
        <TopLeftBar />
        <Navbar />
        <Routes >
        <Route  path = "/product/:productId" element = { <ProductDetails/>} >
        </Route>
        <Route  path = "/products"  element = { <Products/>}>
        </Route>
        <Route exact path = "/" element = { <Home/>}>
        </Route> 
        <Route>404 not found</Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
