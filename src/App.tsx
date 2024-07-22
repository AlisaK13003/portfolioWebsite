import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
