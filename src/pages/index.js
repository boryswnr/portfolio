import * as React from "react";
import Layout from "../Layout";
import {
    titleWrapper,
    landingPage,
    portrait,
    welcoming,
    paragraphWrapper,
    paragraphTitle,
    paragraphText,
    welcomingParagraph,
} from "../index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/oswald";
import "@fontsource/oswald/200.css";
import "@fontsource/oswald/700.css";
import "@fontsource/oswald/500.css";
import downloadFile from "../downloads/BorysCV.pdf";

const IndexPage = () => {
    return (
        <Layout>
            <main className={landingPage}>
                <div className={titleWrapper}>
                    <StaticImage
                        src="../images/zdj1.jpg"
                        alt="A portrait photo of me smiling into the camera"
                        placeholder="blurred"
                        className={portrait}
                    />
                    <h1 className={welcoming}>
                        Hi. I'm Borys, an aspiring fullstack dev. <br />
                        Welcome to my CV website.
                    </h1>

                    <h3 className={welcomingParagraph}>
                        I encourage you to view it, but if you want only a
                        traditional CV, you can download it{" "}
                        <a
                            href={downloadFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            here
                        </a>
                        .
                    </h3>
                </div>

                <div className={paragraphWrapper}>
                    <h3 className={paragraphTitle}>About me</h3>
                    <p className={paragraphText}>
                        I'm 26 years old. I'm passionate about coding and enjoy
                        spending my time honing my skills. I'd like to become a
                        front-end dev and with time, possibly go fullstack.
                        <br />
                        <br />
                        Apart from coding, I like sailing, working out, walking
                        and playing with my dog, playing video games and hiking.
                    </p>
                </div>

                <div className={paragraphWrapper}>
                    <h3 className={paragraphTitle}>About this site</h3>
                    <p className={paragraphText}>
                        This website is created in Gatsby - a react framework
                        for building static websites. It is minimalistic,
                        because I like it like that. If you want to see more
                        fancy websites or other things I made, see a "Projects"
                        tab in the navigation bar at the top.
                    </p>
                </div>
            </main>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
