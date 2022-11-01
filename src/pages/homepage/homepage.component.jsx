import React from "react";
import PrimaryButton from "../../components/Buttons/Primary Button/primary-button.component";
import SecondaryButton from "../../components/Buttons/Secondary Button/secondary-button.component";
import Header from "../../components/Header/header.component";
import hero_image from '../../assets/images/hero_image.png'
// import logo from './logo.svg';

import './homepage.styles.css'

const HomePage = () => (

    <div className="homepage">

        <Header/>

        <div className="body">
        
            <div className = "left-body">
                <h1>Do your best work, supported by your subscribers</h1>
                
                <div className="sub_title">
                    Substack lets independent writers and podcasters publish directly to their audience and get paid through subscriptions.
                </div>
                <div className="buttons_body">
                    <PrimaryButton>Create your substack</PrimaryButton>
                    <SecondaryButton>Find Substacks to read</SecondaryButton>
                </div>
            </div>

            <div className = "right-body">

                {/* <img src = "https://substackcdn.com/image/fetch/w_1166,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fhome_page%2Fhero_image.png" alt = "asd" /> */}
                <img src = {hero_image} alt = "asd" />

            </div>

        </div>


    </div>

)

export default HomePage;