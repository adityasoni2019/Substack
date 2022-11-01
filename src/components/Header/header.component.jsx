import React from "react";
import PrimaryButton from "../Buttons/Primary Button/primary-button.component";
import SecondaryButton from "../Buttons/Secondary Button/secondary-button.component";
import './header.styles.css'
import { ReactComponent as Logo } from '../../assets/logos/substack-white.svg'

const Header = () =>{
    return (
        
        <div className="header">
            
            <Logo className="logo"/>
            
            <div className="left">

                <div>Resources</div>
                <div>Writers</div>
                <div>Readers</div>

            </div>
                    
            <div className="right">
                <PrimaryButton className = "primary-button-header">Start Writing</PrimaryButton>
                <SecondaryButton className = "secondary-button-header">Sign In</SecondaryButton>
            </div>
        
        </div>
    );
}


export default Header;