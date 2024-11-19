import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from '../routes/Router';

function layout(){
  return (
    <>
    <Header></Header>
    <main>
        <Router></Router>
    </main>
    <Footer></Footer>
    </>
  )
}

export default layout;