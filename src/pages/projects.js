import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";
import { StaticImage } from "gatsby-plugin-image";
import { wrapper, image, description } from '../projects.module.css';
import ProjectWrapper from "../ProjectWrapper";

const Projects = () => {

    return (
        <Layout>
            <main>
                <Title titleName="My projects">
                    Projects I have made so far.
                </Title>

                <div className={wrapper}>
                    <ProjectWrapper githubLink="#" deploymentLink="#">
                        <StaticImage
                        src="../images/bolby-screen.png"
                        alt="A small screenshot of my project"
                        placeholder="blurred"
                        className={image}
                        />
                        <p className={description}>
                            Description
                        </p>
                    </ProjectWrapper>
                    
                    <ProjectWrapper githubLink="#" deploymentLink="#">
                            <StaticImage
                            src="../images/weather-app-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                            Description
                            </p>
                    </ProjectWrapper>

                    <ProjectWrapper githubLink="#" deploymentLink="#">
                            <StaticImage
                            src="../images/tulsy-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                                Description
                            </p>
                    </ProjectWrapper>

                    <ProjectWrapper githubLink="#" deploymentLink="#">
                            <StaticImage
                            src="../images/gol-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                                Description
                            </p>
                    </ProjectWrapper>

                    

                </div>

            </main>
        </Layout>
    )
}

export default Projects;
