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
                    <ProjectWrapper
                        githubLink="https://github.com/boryswnr/Drink-database"
                        deploymentLink="https://borys.django-code-brainers.com/"
                    >
                        <StaticImage
                        src="../images/shakerApp-screen.png"
                        alt="A small screenshot of my project"
                        placeholder="blurred"
                        className={image}
                        />
                        <p className={description}>
                            A drink database app. <br />
                            Technologies used: Python, Django. <br/>
                            An app that allows you to create drink recipes from the ingredients you've added.
                            Features other than viewing drink details require logon.
                        </p>
                    </ProjectWrapper>
                    
                    <ProjectWrapper
                        githubLink="https://github.com/boryswnr/bolbyGit"
                        deploymentLink="https://boryswnr.github.io/bolbyGit/"
                    >
                        <StaticImage
                        src="../images/bolby-screen.png"
                        alt="A small screenshot of my project"
                        placeholder="blurred"
                        className={image}
                        />
                        <p className={description}>
                            Bolby theme CV website reproduction. <br />
                            Technologies used: HTML, SCSS, JavaScript. <br/>
                            A reporoduction of Bolby theme website, made to practice web development skills.
                            Also, a little proof that I can make a fancier website if I want to.
                        </p>
                    </ProjectWrapper>
                    
                    <ProjectWrapper
                        githubLink="https://github.com/boryswnr/weatherApp"
                        deploymentLink="https://boryswnr.github.io/weatherApp/"
                    >
                            <StaticImage
                            src="../images/weather-app-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                                Weather forecast app. <br/>
                                Technologies used: HTML, CSS, JavaScript, external API. <br/>
                                A simple website to check a weather for the next few days. Uses free web API and supports JS geolocation.
                            </p>
                    </ProjectWrapper>

                    <ProjectWrapper 
                    githubLink="https://github.com/boryswnr/tulsy-recreation" 
                    deploymentLink="https://boryswnr.github.io/tulsy-recreation/"
                    >
                            <StaticImage
                            src="../images/tulsy-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                                Tulsy corporate landing page reporoduction. <br />
                                Technologies used: HTML, CSS, JavaScript. <br />    
                            </p>
                    </ProjectWrapper>

                    <ProjectWrapper 
                    githubLink="https://github.com/boryswnr/game-of-life" 
                    deploymentLink="https://boryswnr.github.io/game-of-life/"
                    >
                            <StaticImage
                            src="../images/gol-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                            />
                            <p className={description}>
                                Game of Life. <br />
                                Technologies used: JavaScript, HTML, CSS. <br/>
                                Conway's game of life, with rules slightly modified. Project focused mainly on JavaScript.
                            </p>
                    </ProjectWrapper>
                </div>

            </main>
        </Layout>
    )
}

export default Projects;
