import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
import  { Component } from 'react';
import { CNT } from '../shared/cnt';

class YourMainComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
        ctry: CNT
        
    };
}
render()
{
        const d = this.props.loct
        if (d == null) {
            return (<div></div>)
        }
  return(
    <div>
    {this.state.ctry.filter(person => person.id ==d).map(filteredPerson => (
    <MapsComponent id="maps" zoomSettings={{ zoomFactor: 4 }} centerPosition={{ latitude: filteredPerson.coordinates[0], longitude: filteredPerson.coordinates[1]}}>
            <Inject services={[Marker, NavigationLine]}/>
                <LayersDirective>
                    <LayerDirective layerType='OSM'>
                        <MarkersDirective>
                            <MarkerDirective visible={true} height={25} width={15} dataSource={[
    {
        latitude: filteredPerson.coordinates[0],
        longitude: filteredPerson.coordinates[1],
        
    }
]}>
                            </MarkerDirective>
                        </MarkersDirective>
                       
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>  ))}
            </div>
  );
}
}
export default YourMainComponent;