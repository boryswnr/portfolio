import React from "react";
import ExperienceElement from "../ExperienceElement";
import Layout from "../Layout";
import Title from "../PageTitle";

const Experience = () => {

    return (
        <Layout>
            <Title titleName="Work Experience">
                A more or less relevant work experience.
            </Title>

            <ExperienceElement elementTitle="Cyber Security Analyst - Capgemini">
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
            </ExperienceElement>
            
            <ExperienceElement elementTitle="Board assistant - Lumatech">
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
            </ExperienceElement>
            
            <ExperienceElement elementTitle="Manager, co-founder in data science startup">
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
            </ExperienceElement>
            
            <ExperienceElement elementTitle="Product Control Analyst Intern - Credit Suisse">
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
                <li>
                    opis
                </li>
            </ExperienceElement>
            

        </Layout>
    )
}

export default Experience;