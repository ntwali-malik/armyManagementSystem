// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/pages/Dashboard';
import Soldier from './components/pages/Soldier';
import Unit from './components/pages/Unit';
import Mission from './components/pages/Mission';
import Equipment from './components/pages/Equipment';
import Training from './components/pages/Training';
import ProtectedRoute from './components/pages/ProtectedRoute';
import NotFoundPage from './components/pages/NotFoundPage';

function Layout({ children }) {
  const location = useLocation();
  const noHeaderFooterPaths = ['/login', '/dashboard', '/Soldier', '/Unit', '/signup', '/Mission', '/Equipment', '/Training','/*'];
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
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['ADMIN']}><Dashboard /></ProtectedRoute>} />
            <Route path="/Soldier" element={<ProtectedRoute allowedRoles={['ADMIN', 'USER']}><Soldier /></ProtectedRoute>} />
            <Route path="/Unit" element={<ProtectedRoute allowedRoles={['ADMIN']}><Unit /></ProtectedRoute>} />
            <Route path="/Mission" element={<ProtectedRoute allowedRoles={['ADMIN', 'USER']}><Mission /></ProtectedRoute>} />
            <Route path="/Equipment" element={<ProtectedRoute allowedRoles={['ADMIN']}><Equipment /></ProtectedRoute>} />
            <Route path="/Training" element={<ProtectedRoute allowedRoles={['ADMIN', 'USER']}><Training /></ProtectedRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}


export default App;