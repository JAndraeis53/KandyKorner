import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Nashville Kandy Korner</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville Place of Business</div>
            <div>500 Sweet Tooth</div>
        </address>
        <PropsAndState yourName={"Brenda"} />
    </>
)
