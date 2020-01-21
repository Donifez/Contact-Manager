import React from "react";
import PropTypes from "prop-types";

const TextInputGroup=()=>({
label,
name,
value,
placeholder,
type,
onChange,
error


})=>{
    return(
        
        <div className="form-group">
               <label htmlFor={name}>
               {label}
               </label>
               <input type={type} name={name} className=" is-invalid form-control form-control-lg "  placeholder={placeholder} value={value}
                onChange={onChange}/>
            <div className="invalid-feedback">This is wrong</div>
               </div>
    )
};
TextInputGroup.propTypes={
        label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
      placeholder:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
          onChange:PropTypes.func.isRequired,
            value:PropTypes.string.isRequired,
}

TextInputGroup.defaultProps={
  type:"text"
}



export default TextInputGroup;