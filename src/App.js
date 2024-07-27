import React, { useState, useEffect, AppHelmet } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Link,
  NavLink
} from "react-router-dom";
import { HomePage, ProjectsPage } from './pages/index';
import { Header, Footer } from './components/index';


function App() {

  return (
    <>
      <Header />
        <main className='.container content px-3'>
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/projects" Component={ProjectsPage} />
          </Routes>

          {/* <p className='d-block d-sm-none'>
            Screen size: extra small
            </p>
            <p className='d-none d-sm-block d-md-none'>
            Screen size: small
            </p>
            <p className='d-none d-md-block d-lg-none'>
            Screen size: medium
            </p>
            <p className='d-none d-lg-block d-xl-none'>
            Screen size: large
            </p>
            <p className='d-none d-xl-block'>
            Screen size: extra large
            </p> */}
        </main>
      <Footer />
    </>
  );
}

export default App;
