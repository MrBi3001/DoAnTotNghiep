
import ContactPage from '../Pages/ContactPage';
import DiscountPage from '../Pages/DiscountPage';
import HomePage from '../Pages/HomePage';
import LaptopPage from '../Pages/LaptopPage';
import NewPage from '../Pages/NewPage';
import Product from '../Components/Product';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Pay from '../Components/Pay';
import Cart from '../Components/Cart/Cart';
import Admin from '../Pages/Admin/Admin';
import MainLayout from '../Layout/MainLayout';
import Profile from '../Components/Profile/Profile';
import Checkout from '../Components/Checkout/Checkout';
import OrderSuccess from '../Components/OrderSuccess/OrderSuccess';
import Orders from '../Components/Order/Orders';
import OrderDetail from '../Components/OrderDetail/OrderDetail';

const laptopType = ["Laptop","Computer", "Phần cứng", "Phụ kiện", "Product", "Cart"];

const publicRoutes = [
    // Public routes - no login required
    {path: "/", component: <HomePage />, protected: false},
    {path: "/Product/Laptop", component: <LaptopPage laptopType={laptopType[0]}/>, protected: false},
    {path: "/Product/Computer", component: <LaptopPage laptopType={laptopType[1]}/>, protected: false},
    {path: "/Product/phancung", component: <LaptopPage laptopType={laptopType[2]}/>, protected: false},
    {path: "/Product/phukien", component: <LaptopPage laptopType={laptopType[3]}/>, protected: false},
    {path: "/Product", component: <LaptopPage laptopType={laptopType[4]}/>, protected: false},
    {path: "/khuyenmai", component: <DiscountPage />, protected: false},
    {path: "/tintuc", component: <NewPage />, protected: false},
    {path: "/lienhe", component: <ContactPage /> , protected: false},
    {path: "/product/:id", component: <Product />, protected: false},
    {path: "/login", component: <Login />, layout: null},
    {path: "/register", component: <Register />, layout: null},
    {path: "/thanh-toan", component: <Pay /> , protected: true},
    {path: "/cart", component: <Cart laptopType={laptopType[5]}/> ,protected: false},
    // {path: "/Administration", component: <Admin></Admin> , protected: true},
    {path: "/profile", component: <Profile />, protected: true}, 
    {path: "/checkout", component: <Checkout />, protected: true},
    {path: "//order-success", component: <OrderSuccess />, protected: true},
    {path: "/orders", component: <Orders></Orders>,  protected: true},
    {path: "/orders/:orderId", component: <OrderDetail />, protected: false},
 
    // {
    //     path: '/',
    //     component: <HomePage />,
    //     layout: <MainLayout />,
    //     protected: true // Add this field
    //   },
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes};