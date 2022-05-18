
import Home from './pages/Home/Home';
import Announcement from './components/Announcement/Announcement';
import TopLeftBar from './components/Navbar/TopLeftBar';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products/Products';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";

import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';

import './App.css';

function App() {
  return (
    <>
     
      <Announcement />
        <TopLeftBar />
        <Navbar />

       
        <Switch >
        <Route  path = "/product/:productId" >
          <ProductDetails/>
        </Route>
        <Route  path = "/products" >
          <Products/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route> 
      
        
        <Route>404 not found</Route>
        </Switch>

        <Footer />
     

    </>
  );
}

export default App;
