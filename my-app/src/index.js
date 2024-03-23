import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import background from './Component/Assests/background.jpg';


import Navbar from './Component/Navbar/Navbar';
import Presentation from './Component/Présentation/Presentation';
import Description  from './Component/Description/description';
import Footer from './Component/Footer/footer';
// import ThirdMain from './Component/ThirdMain/ThirdMain';
import Gird from './Component/Gird/Gird';
import Temoignage from './Component/Temoignage/Temoignage';
import Social from './Component/Social/Social';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Presentation />
    <Description />
    {/* <ThirdMain /> */}
    <Gird />
    <Temoignage />
    <Social />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
