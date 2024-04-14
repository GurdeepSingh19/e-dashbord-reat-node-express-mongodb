import './App.css';
import Nav from './components/navigation';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import PrivateComponent from './components/PrivateComponents';
import Login from './components/login';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update/:id" element={<UpdateProduct />}></Route>
            <Route path="/profile" element={<h1>Profile Componentss</h1>}></Route>
          </Route>

          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
