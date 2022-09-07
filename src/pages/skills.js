import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";
import { skillsColumnsWrapper } from "../skills.module.css";

const Skills = () => {

    return (
        <Layout>
            <main className={skillsColumnsWrapper}>
                <div>
                    <Title titleName="Tech skills">
                        A list of technologies I know.
                    </Title>
                    <ul>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Javascript
                        </li>
                    </ul>
                </div>

                <div>
                    <Title titleName="Soft skills">
                        Some of my characteristics.
                    </Title>
                    <ul>
                        <li>
                            Teamwork
                        </li>
                        <li>
                            Teamwork
                        </li>
                        <li>
                            Teamwork
                        </li>
                        <li>
                            Teamwork
                        </li>
                    </ul>
                </div>

            </main>
        </Layout>
    )
}

export default Skills;
