/*
    File: Projects.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import { projects } from "../constants/data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
    return (
        <ul className="max-w-[1000px] w-auto flex flex-col flex-nowrap items-start justify-center gap-10 md:flex-row md:flex-wrap md:gap-11">
            {projects.map((project, id) => (
                <li key={id} className="m-auto flex flex-col flex-nowrap items-center justify-center gap-6 project-collection basis-0 grow shrink-1">
                    <ProjectModal projectId={`project-modal-${id}`} projectData={project} />
                </li>
            ))}
        </ul >
    );
}