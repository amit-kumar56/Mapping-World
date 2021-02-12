import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { CNT } from '../shared/cnt';

class Det extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctry: CNT
            
        };
    }


    render() {
        const dishr = this.props.dis
        if (dishr == null) {
            return (<div></div>)
        }
        //const dishItem = this.renderDish(dishr)
        
        return (
            <div className='row'>
          
         {this.state.ctry.filter(person => person.id ==dishr).map(filteredPerson => (
         <div className='col-12 col-md-5 m-1'>
             <Card className="card-text-primary"> 
             <CardImg width="100%" src={filteredPerson.image} alt={filteredPerson.name} />
           <CardBody className="text-primary">
           Name of Country: {filteredPerson.name}<br/>
           
           Speed: {filteredPerson.speed}<br/>
           Distance: {filteredPerson.distance}<br/>
           Timezone: {filteredPerson.timezone}<br/>
           Volume: {filteredPerson.volume}
           </CardBody>
            </Card>
         
     </div>
         ))}
    
   
            </div>
         
        )
    }
}

export default Det;
