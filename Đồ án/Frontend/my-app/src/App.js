import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import GlobalStyles from './Components/GlobalStyles';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import MainLayout from './Layout/MainLayout';
import Login from './Components/Login';
import Admin from './Pages/Admin/Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Components/Checkout/Checkout';
import OrderSuccess from './Components/OrderSuccess/OrderSuccess';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ children, adminOnly = false }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    if (adminOnly && user?.role !== 'Admin') {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <GlobalStyles>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : MainLayout;
            const Page = route.component;
            
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <ProtectedRoute adminOnly={route.adminOnly}>
                      <Layout>{Page}</Layout>
                    </ProtectedRoute>
                  ) : (
                    <Layout>{Page}</Layout>
                  )
                }
              />
            );
          })}
        </Routes>
        <Routes>
        <Route path="/admin/*" element={<Admin />} />
        {/* <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} /> */}
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      </div>
    </GlobalStyles>
  );
}

export default App;
