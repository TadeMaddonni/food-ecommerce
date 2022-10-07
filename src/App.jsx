import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer";
import Topbar from "./components/common/topbar/Topbar";
import Home from "./pages/home/Home";
import menuData from "./utils/data/data";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";

function App() {
    const elements = menuData.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <span>${item.price}</span>
            </div>
        );
    });
    return (
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
