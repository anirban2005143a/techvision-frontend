import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from './components/utiles/Events';
import HomePage from './components/utiles/HomePage';
import Navbar from './components/utiles/navbar';
import Contact from './components/utiles/Contact';
import EventDetail from './components/utiles/EventDetail';
import Results from './components/utiles/results';
import ScrollToTop from './components/functions/ScrolltoTop';
import Aboutgec from './components/utiles/about/aboutgce';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <>
      <ScrollToTop/>
       <HomePage />
       </>
    },
    {
      path: "/events",
      element: <>
      <ScrollToTop/>
        <Navbar />
        <Events />
      </>
    },
    {
      path: "/contact",
      element: <>
      <ScrollToTop/>
        <Contact />
      </>
    },
    {
      path: "/eventDesc",
      element: <>
      <ScrollToTop/>
        <Navbar />
        <EventDetail/>
      </>
    },
    {
      path: "/results",
      element: <>
      <ScrollToTop/>
        <Navbar />
        <Results/>
      </>
    },
    {
      path: "/about/gec",
      element: <>
      <ScrollToTop/>
        <Navbar />
        <Aboutgec/>
      </>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};


export default App;
