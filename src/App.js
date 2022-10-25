import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import ChartAnalytics from "./pages/ChartAnalytics";
import { useState } from "react";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 426px) {
    margin-bottom: 20px;
  }
`;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Container>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Wrapper onClick={() => setMenuOpen(false)}>
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/analytics" element={<ChartAnalytics />} />
          </Routes>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
};

export default App;
