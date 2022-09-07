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

                <ExperienceElement elementTitle="Fullstack dev bootcamp">
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

                <ExperienceElement elementTitle="Economics - Wroclaw University">
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
                
                <ExperienceElement elementTitle="Karola Miarki Highschool in Mikolow - linguistics profile">
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
                
                
            </main>
        </Layout>
    )
}

export default EducationPage;
