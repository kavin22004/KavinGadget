import './App.css';
import Home from './components/Menu/Home';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Login from './components/Menu/Login';
import Signup from './components/Menu/Signup';
import Deals from './components/Menu/Deals';
import Catrgories from './components/Menu/Catrgories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductDetail from './components/product/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>

      <HelmetProvider>
         <Header/>
         <ToastContainer theme='dark' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categories' element={<Catrgories />} />
          <Route path='/deals' element={<Deals />} />
        </Routes>
          <Footer/>
      </HelmetProvider>

    </Router>
  );
}

export default App;
