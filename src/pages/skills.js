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
    faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faHandsHelping,
    faClock,
    faChartLine,
    faCompass,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

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
                            <FontAwesomeIcon icon={faHtml5} className={icon} />
                            HTML
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCss3} className={icon} />
                            CSS
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSass} className={icon} />
                            SASS
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs} className={icon} />
                            JavasScript
                        </li>
                        <li>
                            <svg
                                className={icon}
                                fill="none"
                                height="16"
                                viewBox="0 0 27 26"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clip-rule="evenodd"
                                    d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                                    fill="#000"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            TypeScript
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faReact} className={icon} />
                            React
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPython} className={icon} />
                            Python
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCode} className={icon} />
                            Django
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinux} className={icon} />
                            Linux
                        </li>
                    </ul>
                </div>

                <div>
                    <Title titleName="Soft skills">
                        Some of my characteristics.
                    </Title>
                    <ul className={list}>
                        <li>
                            <FontAwesomeIcon
                                icon={faHandsHelping}
                                className={icon}
                            />
                            Teamwork
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} className={icon} />
                            Punctuality
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className={icon}
                            />
                            Ambition
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faCompass}
                                className={icon}
                            />
                            Independence
                        </li>
                    </ul>
                </div>

                <div>
                    <Title titleName="Languages">
                        Languages I speak or learn.
                    </Title>
                    <ul className={list}>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />
                            Polish - native
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />
                            English - fluent
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />
                            Spanish - intermediate [B2]
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} className={icon} />
                            German - basic [A1]
                        </li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
};

export default Skills;

export const Head = () => <title>Skills</title>;
