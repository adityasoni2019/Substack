import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { Component } from "react";

// Now, we need this to be a class components, cause we need data. 

class SignIn extends React.Component{

    render(){
        return(
            <div className="signIn">
                <p>HELLOS</p>
            </div>
        );
    }

}

export default SignIn; 