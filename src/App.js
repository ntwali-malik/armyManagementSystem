// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate,useLocation } from "react-router-dom";
// import Navbar from './components/common/Navbar';
 import LoginPage from './components/auth/LoginPage';
// import RegistrationPage from './components/auth/RegistrationPage';
// import FooterComponent from './components/common/Footer';
// import UserService from './components/service/UsersService';
// import UpdateUser from './components/userspage/UpdateUser';
// import UserManagementPage from './components/userspage/UserManagementPage';
//  import ProfilePage from './components/userspage/ProfilePage';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
// import Login from './components/pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/pages/Dashboard';
import Soldier from './components/pages/Soldier';

function Layout({ children }) {
  const location = useLocation();
  const noHeaderFooterPaths = ['/login','/dashboard','/soldier']; // Add paths where you don't want to show Header and Footer

  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}


function App() {

  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/soldier" element={<Soldier />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;