import React from "react";
import ExperienceElement from "../ExperienceElement";
import Layout from "../Layout";
import Title from "../PageTitle";

const EducationPage = () => {

    return (
        <Layout>
            <main>
                <Title titleName="Education">
                        My education, chronologically from the most recent.
                </Title>

                <ExperienceElement elementTitle="Fullstack dev bootcamp" date="December.2021 - August.2022">
                        <li>
                            Frontend - HTML, CSS, SCSS, JS and React
                        </li>
                        <li>
                            Backend - Python and Django
                        </li>
                        <li>
                            Additionally - SQL, Git, Linux
                        </li>
                </ExperienceElement>

                <ExperienceElement elementTitle="Economics - Wroclaw University" date="2015 - 2018">
                        <li>
                        Bachelor's degree
                    </li>
                    <li>
                        Specialization: Economics Law
                    </li>
                        
                </ExperienceElement>
                
                <ExperienceElement elementTitle="Karola Miarki Highschool in Mikolow - linguistics profile" date="2012 - 2015">
                    
                </ExperienceElement>
                
                
            </main>
        </Layout>
    )
}

export default EducationPage;
