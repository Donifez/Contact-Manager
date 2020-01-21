import React from "react";
import PropTypes from 'prop-types';
import {Consumer} from "../../context";
import Down from "../../images/icon-down.png";
import Remove from "../../images/icons-remove.svg";
import { thisExpression } from "@babel/types";

class Contacts extends React.Component {
    state={
        showContactInfo:false
    };

    constructor(props) {
        super(props);
        this.state = {  };
    }

    onDeleteClick=(id, dispatch)=>{
        dispatch({type:"DELETE_CONTACT", payload:id});
     
    }
    render() {
        const{id,name, email, phone}=this.props.contact;
        const{showContactInfo}=this.state;
        return (

            <Consumer>
            {value => {
                const{dispatch}=value;
                return(
             <div className="card card-body mb-3">
            <h4>
             {name}  <img   style={{cursor:'pointer'}}  onClick={()=>this.setState({showContactInfo:!this.state.showContactInfo})
               } src={Down} alt="img"  />
              <img   style={{cursor:'pointer', float:"right"}} 
               src={Remove} alt="img"  onClick={this.onDeleteClick.bind(this,id, dispatch)} />

             </h4>
      
            {showContactInfo ? (<ul className="list-group">
                     <li className= "list-group-item">{email}</li>
                      <li className= "list-group-item">{phone}</li>
                </ul>):null }  
    
           
              </div>
                )
            }}
            </Consumer>
         
        );
    }

   
}
Contacts.propTypes = {
    contact: PropTypes.object.isRequired,

     };

export default Contacts;