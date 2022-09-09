import React from "react";
import { bg, overlay, icon, link } from './projectWrapper.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectWrapper = ({children, githubLink, deploymentLink}) => {

    return (
        <div className={bg}>
            <div className={overlay}>
                <a className={link} href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={icon} />
                </a>
                <a className={link} href={deploymentLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} className={icon} />
                </a>
            </div>
            {children}
        </div>
    )
}

export default ProjectWrapper;
