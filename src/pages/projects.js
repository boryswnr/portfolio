import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";
import { StaticImage } from "gatsby-plugin-image";
import { wrapper, image, description } from "../projects.module.css";
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
                        githubLink="https://github.com/boryswnr/party_app"
                        deploymentLink="https://github.com/boryswnr/party_app"
                    >
                        <StaticImage
                            src="../images/partyappscreen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                        />
                        <p className={description}>
                            Shared Music Controller app <br />
                            Technologies used: TypeScript, React, Django,
                            Spotify API. <br />A fullstack project built around
                            Spotify API to let people play/pause music and vote
                            on skipping a song. <br /> So far, no deployment
                            available. See README in the repo to for
                            instructions on how to spin it up.
                        </p>
                    </ProjectWrapper>

                    <ProjectWrapper
                        githubLink="https://github.com/boryswnr/shopping-cart"
                        deploymentLink="https://borys-shopping-cart.netlify.app/"
                    >
                        <StaticImage
                            src="../images/shopping-cart-screen.png"
                            alt="A small screenshot of my project"
                            placeholder="blurred"
                            className={image}
                        />
                        <p className={description}>
                            A frontend of an e-commerce shopping cart. <br />
                            Technologies used: TypeScript, React. <br />A
                            frontend side of a regular shopping cart you can
                            find on any on-line shop. Basic styling via
                            bootstrap.
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
                            Corporate landing page. <br />
                            Technologies used: HTML, CSS, JavaScript. <br />
                            Based on tulsy template.
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
                            Weather forecast app. <br />
                            Technologies used: HTML, CSS, JavaScript, web API.{" "}
                            <br />A simple website to check a weather for the
                            next few days. Uses free web API and JS geolocation.
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
                            Technologies used: JavaScript, HTML, CSS. <br />
                            Conway's game of life, with rules slightly modified.
                            Project focused mainly on JavaScript.
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
                            Technologies used: HTML, SCSS, JavaScript. <br />A
                            reporoduction of Bolby theme website, made to
                            practice web development skills. Also, a little
                            proof that I can make a fancier website if I want
                            to.
                        </p>
                    </ProjectWrapper>
                </div>
            </main>
        </Layout>
    );
};

export default Projects;

export const Head = () => <title>My Projects</title>;
