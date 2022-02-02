import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Shared/Layout';
import NoPage from './Shared/NoPage';
import Home from './Home';
import About from './About';

// import '../styles/index.scss';
import '../styles/main.scss';
import '../styles/font-faces/CandyShop.scss';

// import { NavHeader } from '../components/Shared/NavHeader';
// render(<NavHeader />, document.getElementById('root'));

// Construct React Routing
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Attach React to DOM
ReactDOM.render(<App />, document.getElementById('root'));
