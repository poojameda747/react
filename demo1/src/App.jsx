import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Dashboard from './pages/Dashboard';
import ClassRoom from './pages/ClassRoom';
import Assessment from './pages/Assessment';
import Store from './pages/Store';
import Calendar from './pages/Calendar'; // Fixed spelling
import News from './pages/News';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import MyAccounts from './pages/MyAccounts';
import MySettings from './pages/MySettings';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<ClassRoom />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} /> {/* Fixed spelling */}
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />

        {/* Profile Route with Nested Routes */}
        <Route path="/profile" element={<Profile />}>
          <Route path="myaccount" element={<MyAccounts />} />
          <Route path="mysettings" element={<MySettings />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
