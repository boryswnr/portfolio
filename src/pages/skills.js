import React from "react";
import Layout from "../Layout";
import Title from "../PageTitle";
import { columnsWrapper, list, icon } from "../skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faSass,
    faJs,
    faReact,
    faPython,
} from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faHandsHelping,
    faClock,
    faChartLine,
    faCompass,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

    return (
        <Layout>
            <main className={columnsWrapper}>
                <div>
                    <Title titleName="Tech skills">
                        A list of technologies I know.
                    </Title>
                    <ul className={list}>
                        <li>
                            <FontAwesomeIcon icon={faHtml5} className={icon} />HTML
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCss3} className={icon} />CSS
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSass} className={icon} />SASS
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs} className={icon} />Javascript
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faReact} className={icon} />React
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPython} className={icon} />Python
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCode} className={icon} />Django
                        </li>
                    </ul>
                </div>

                <div>
                    <Title titleName="Soft skills">
                        Some of my characteristics.
                    </Title>
                    <ul className={list}>
                        <li>
                            <FontAwesomeIcon icon={faHandsHelping} className={icon} />Teamwork
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} className={icon} />Punctuality
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChartLine} className={icon} />Ambition
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCompass} className={icon} />Independence
                        </li>
                    </ul>
                </div>

                 <div>
                    <Title titleName="Languages">
                        Languages I speak or learn.
                    </Title>
                    <ul className={list}>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />Polish - native
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />English - fluent
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />Spanish - intermediate [B2]
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />German - basic [A1]
                        </li>
                    </ul>
                </div>

            </main>
        </Layout>
    )
}

export default Skills;
