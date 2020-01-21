import React , {Component} from "react";
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email:"",
            phone:"",
            errors:{}
         };

        
      

    }
       onSubmit=(dispatch, e)=>{
             e.preventDefault();
             const {name, email, phone}=this.state;

             //check for errors
             if (name==="") {
                 this.setState({errors:{name:"Name is required"

                 }})
                 
             }

                if (email==="") {
                 this.setState({errors:{email:"Email is required"

                 }})
                 
             }

                if (phone==="") {
                 this.setState({errors:{phone:"Phone is required"

                 }})
                 
             }
             
             const newContact={
               id: uuid(),
              name,
              email,
              phone   
             }
              dispatch({type:"ADD_CONTACT", payload:newContact});

              //Clear State
              this.setState({

                  name:"",
                  email:"",
                  phone:"",
                  errors:{}
              });
            
         }
     onChange =e=> this.setState({[e.target.name]: e.target.value});



    render() {
        const {name, email, phone, errors}=this.state;

        return(
            <Consumer>

            {value=>{
                const{dispatch}=value;
                return(
                            <div className="card mb-3">
                
            <div className="card-header">Add Contact
                
            </div>
               <div className="card-body">
               <form onSubmit={this.onSubmit.bind(this,dispatch)}>

                {/* <TextInputGroup
                  label="name"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={this.onChange}
                /> */}

               <div className="form-group">
               <label htmlFor="name">
               Name
               </label>
               <input type="text" name="name" className="form-control form-control-lg"  placeholder="Enter Name ..." value={name}
                onChange={this.onChange}  error={errors.name}/>
            
               </div>

                 <div className="form-group">
               <label htmlFor="email">
               Email
               </label>
               <input type="email" name="email" className="form-control form-control-lg"  placeholder="Enter Email ..." value={email}
                onChange={this.onChange}  error={errors.email}/>
            
               </div>


                     <div className="form-group">
               <label htmlFor="Phone">
               Phone
               </label>
               <input type="text" name="phone" className="form-control form-control-lg"  placeholder="Enter Phone ..." value={phone} 
               onChange={this.onChange}  error={errors.phone}/>
            
               </div>
               <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
               </form>

                
            </div>
            </div>
                )
            }}

            </Consumer>

        )
      
    }
}

export default AddContact;