import React from "react";
import ExperienceElement from "../ExperienceElement";
import Layout from "../Layout";
import Title from "../PageTitle";

const Experience = () => {
    return (
        <Layout>
            <Title titleName="Work Experience">
                My relevant work experience.
            </Title>

            <ExperienceElement
                elementTitle="Cyber Security Analyst - Capgemini"
                date="April.2022 - present"
            >
                <li>Analysis and managment of threat alerts</li>
                <li>
                    Patching cybersecurity vulnerabilities in clients software
                </li>
                <li>Python automation and web scrapping</li>
            </ExperienceElement>

            <ExperienceElement
                elementTitle="Board assistant - Lumatech"
                date="January.2020 - April.2022"
            >
                <li>Conducting sales of machines via electronic channels</li>
                <li>Preparing sale announcments and customer service</li>
                <li>
                    Taking care of current inspections in the field of
                    construction, electricity, fire hazard, health and safety
                    and others
                </li>
            </ExperienceElement>

            <ExperienceElement
                elementTitle="Manager, co-founder in data science startup"
                date="June.2019 - December.2019"
            >
                <li>Founder and manager of a data science start-up</li>
                <li>Managing day-to-day administrative tasks</li>
                <li>
                    Meeting with clients, negotiating, acquiring new customers,
                    cooperating with programists and data scientists
                </li>
            </ExperienceElement>

            <ExperienceElement
                elementTitle="Product Control Analyst Intern - Credit Suisse"
                date="February.2018 - April.2018"
            >
                <li>
                    Control and analysis of daily profit & loss of American
                    assets
                </li>
            </ExperienceElement>
        </Layout>
    );
};

export default Experience;

export const Head = () => <title>Experience</title>;
