import React from "react";
import PrimaryButton from "../../components/Buttons/Primary Button/primary-button.component";
import SecondaryButton from "../../components/Buttons/Secondary Button/secondary-button.component";


const HomePage = () => (

    <div className="homepage">

        <div className="header">

            <div>Resources</div>
            <div>Writers</div>
            <div>Readers</div>
            
            <PrimaryButton>Start Writing</PrimaryButton>
            <SecondaryButton>Sign In</SecondaryButton>
            
            
        </div>

        <div className="body">

        Do your best work, supported by your subscribers

        </div>


    </div>

)

export default HomePage;