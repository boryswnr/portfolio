import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";

const EducationPage = () => {

    return (
        <Layout>
            <main>
                <Title titleName="Education">
                        My education, chronologically from the most recent.
                </Title>

                <div>
                    <h3>
                        Fullstack dev coding bootcamp
                    </h3>
                    <ul>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>
                        Economics - Wroclaw University
                    </h3>
                    <ul>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3>
                        Karola Miarki Highschool - linguistics profile
                    </h3>
                    <ul>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                        <li>
                            opis
                        </li>
                    </ul>
                </div>
                
                
            </main>
        </Layout>
    )
}

export default EducationPage;
