import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { CNT } from '../shared/cnt';
import Det from './Det';
import YourMainComponent from './Hd';

class Frm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: CNT,
            selectedcount:null,
            slc:null
        };
        this.onChangev = this.onChangev.bind(this);        
         this.afterSubmission = this.afterSubmission.bind(this);
    }
   
  onChangev(event) {
    this.setState({ slc: event.target.value});
  }
  afterSubmission(event){
      event.preventDefault();
      this.setState({ selectedcount: this.state.slc});


  }
    render() {
       
        return (
            <div className="jumbotron .text-warning " style={{backgroundColor:"red" }}>
                <form onSubmit={this.afterSubmission}>
                <div className="form-group">
                         <label>Country</label>
                         <select className="browser-default custom-select" value={this.state.slc} onChange={this.onChangev}>
                         <option>Choose your option</option>
                             <option value="1">USA</option>
                            <option value="2">INDIA</option>
                            <option value="3">UK</option>
                        </select>
                </div>
                
               
               <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
               <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                <Det dis={this.state.selectedcount} />

                </div>
                <div className='col-12 col-md-5 m-1'>
                <YourMainComponent loct={this.state.selectedcount} />

                </div>
                </div>
               
             
            </div>
            
        );
    }
}

export default Frm; 
