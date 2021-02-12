import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Frm from './Frm';


import { CNT } from '../shared/cnt';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import YourMainComponent from './Hd';

class Mn extends Component {

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <Header />
        <Frm  />

        <Footer />
      </div>
    );
  }
}

export default Mn;