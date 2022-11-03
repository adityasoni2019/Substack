import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { Component } from "react";

import {ReactComponent as Logo} from '../../../assets/logos/substack-brand-color.svg'

// Now, we need this to be a class components, cause we need data. 

class SignIn extends React.Component{

    render(){
        return(
            <div className="signIn">

                <div className="headser">

                    <Logo className="logo"/>
                    
                </div>

            </div>
        );
    }

}

export default SignIn; 