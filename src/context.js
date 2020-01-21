import React , {Component} from "react";


const Context=React.createContext();

const reducer=(state,action)=>{
    switch (action.type) {
        case "DELETE_CONTACT":
     return{
         ...state,
         contacts: state.contacts.filter(
             contact=> contact.id !== action.payload
             )
    };

     case "ADD_CONTACT":
     return{
         ...state,
         contacts:[action.payload,
         ...state.contacts]
     };
     default:return state;
    }
};

export class Provider extends Component{
    state={
        contacts:[
            {
                id:1,
        name: "Donifez",
        email: "donifez224@gmail.com",
        phone: "07073836382"
            },
            {
               id:2,
       name: "ifez",
       email: "pile224@gmail.com",
       phone: "07035426385"
           },
           {
               id:3,
       name: "Doni",
       email: "doni@gmail.com",
       phone: "07054736382"
           }
        ],
         dispatch : action=>
             this.setState(state=>reducer(state,action))
         
    }

    render(){
        return(
            <Context.Provider value={this.state }>
                {this.props.children}
            </Context.Provider>
        );
    }
  
}
export const Consumer=Context.Consumer;