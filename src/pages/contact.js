import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { contactTitle, link, btn, wrapper } from "../contact.module.css";

const ContactPage = () => {

    return (
        <Layout>
            <Title titleName="Contact">
                Wanna get in touch? Here's how.
            </Title>

            <div className={wrapper}>
                <h3 className={contactTitle}>
                    Social media links:
                </h3>

                <a href="https://linkedin.com/in/borys-wnr/" className={link}>
                    <FontAwesomeIcon icon={faLinkedin} /> - linkedin.com/in/borys-wnr/
                </a>
                <br/>
                <a href="https://github.com/boryswnr" className={link}>
                    <FontAwesomeIcon icon={faGithub} /> - github.com/boryswnr
                </a>
            </div>

            <div className={wrapper}>
                <h3 className={contactTitle}>
                    E-mail me:
                </h3>
                <a href="mailto: boryswnr@proton.me" className={link}>boryswnr@proton.me</a>
            </div>

        <a href="#" className={btn}>
                Download my CV
            </a>

        </Layout>
    )
}

export default ContactPage;
