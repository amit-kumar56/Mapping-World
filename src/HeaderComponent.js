import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import Sidebar from "react-sidebar";
import Sideb from './Sideb';
class Header extends Component {
    
 
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="navbar navbar-dark navbar-expand-sm  fixed-top">
           
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>

            </button>
            <a className="nav-brand " href="#"><img src="img/logo.png" height="30" width="41"/></a>
            <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a class="nav-link" href="#"><span class="fa fa-home fa-lg"></span>Home</a></li>
                <li className="nav-item active"><a class="nav-link" href="./aboutus.html"><span class="fa fa-info fa-lg"></span>aboutus</a></li>
      
                <li className="nav-item active"><a class="nav-link" href="#"><span class="fa fa-list fa-lg"></span>Menu</a></li>
      
                <li className="nav-item active"><a class="nav-link" href="#"><span class="fa fa-address-card fa-lg"></span>Contact</a></li>
      
      
            </ul>
            <span className="navbar-text">
                <a id="login" data-toggle="modal" data-target="#loginModal">
                <span className="fa fa-sign-in"></span> Login</a>
            </span>
            <span className="navbar-text">
                <a id="login" data-toggle="modal" data-target="#loginModal">
                <span className="fa fa-sign-in"></span> LogOut</a>
            </span>
          </div>
      
        </div>
        </div>
      </Navbar>
      <div id="loginModal" class="modal fade" role="dialog">
        <div className="modal-dialog modal-lg" role="content">
           
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                    <label className="sr-only" for="exampleInputEmail3">Email address</label>
                                    <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"/>
                            </div>
                            <div className="form-group col-sm-4">
                                <label className="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                            </div>
                            <div className="col-sm-auto">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label"> Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary btn-sm ml-1">Sign in</button>        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
      <Jumbotron>
     <Sideb/>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;