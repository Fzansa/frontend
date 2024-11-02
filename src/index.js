import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkClickCounts from './components/LinkClickCounts';
import LinkUnshort from './components/LinkUnshort';
import TrackClick from './components/TrackClick';
import Footer from './components/Footer';
import ShowDestination from './components/ShowDestination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/url/analytics/:shortId' element={<LinkClickCounts />} />
        <Route path='/url/unshort' element={<LinkUnshort />} />
        <Route path='/url/track-url' element={<TrackClick />} />
        <Route path='/url/show-destination/:shortId' element={<ShowDestination />} />

      </Routes>
      <div className='footer'><Footer /></div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
