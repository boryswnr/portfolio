import * as React from "react";
import Layout from "../Layout";
import { titleWrapper, landingPage, portrait } from "../index.module.css";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = () => {
  return (
    <Layout>
      <main className={landingPage}>
        <div className={titleWrapper}>
          <StaticImage src="../images/zdj1.jpg" alt="A portrait photo of me smiling into the camera" placeholder="blurred" className={portrait} />
          <h1>
            Hi. I'm Borys, an aspiring front-end dev. <br />
            Welcome to my CV website.
          </h1>

          <h3>
            I encourage you to view it, but if you want only a traditional CV, you can download it <a href="#">here</a>.
          </h3>
        </div>

        <div>
          <h2>
            About me
          </h2>
          <p>
            A paragraph describing myself, my ambitions, plans and qualities. <br />
            Lorem ipsum
          </p>
        </div>

      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
