import './App.css';
import { Route, Routes } from 'react-router-dom'
import Customers from './pages/customers/Customers';
import Menu from './pages/menu/Menu';
import Products from './pages/products/Products';
import Purchases from './pages/purchases/Purchases';
import EditProduct from './pages/products/EditProduct';
import EditCustomer from './pages/customers/EditCustomer';

function App() {
  document.body.style.backgroundColor = 'lightgray'
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<EditProduct />} />

        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/:id' element={<EditCustomer />} />

        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </div>
  );
}

export default App;
