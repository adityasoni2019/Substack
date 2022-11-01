import React from "react";
import './secondary-button.styles.css'


const SecondaryButton = (props) =>{
    return (

        <div className="secondary-button">
            {props.children}
        </div>
    );

}

export default SecondaryButton;