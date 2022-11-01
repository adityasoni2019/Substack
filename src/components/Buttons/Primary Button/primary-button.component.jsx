import React from "react";
import './primary-button.styles.css'

const PrimaryButton = (props)=>{
    return (
        
        <div className="primary-button">
            
            {props.children}
            
        </div>

    );
}

export default PrimaryButton; 