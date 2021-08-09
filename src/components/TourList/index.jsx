
import React,{Component } from 'react';
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import {tourData} from "../../tourData";
class TourList extends Component {
    state = { 

        tours:tourData
     };

     removeTour=(id)=>{
         console.log(id);
this.setState({tours:this.state.tours.filter(f=>f.id!==id)})
     }
    render() { 
        const {tours}=this.state;
       
        return ( <section className="tourslist">

            { 
            tours.map(m=>{

                return <Tour key={m.id} {...m} removeTour={this.removeTour}/>
            })
            
            }
        </section> );
    }
}
 
export default TourList;