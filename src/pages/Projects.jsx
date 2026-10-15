import { useState } from "react";
import ProjectCard from '../components/ProjectCard'
import { projects } from "../data/project";

const allTech = ['All', ...new Set(projects.flatMap((p) => p.tech))]

function Projects() {
    const [selected, setSelected] = useState('All')

    const visible =
        selected === 'All'
            ? projects
            : projects.filter((p) => p.tech.includes(selected))

    return (
        <section className="page projects">
            <h1>Projects</h1>
            <p className="projects-intro">Things I've built and things I'm building.</p>

            <div className="filter-bar">
                {allTech.map((tech) =>
                    <button
                        key={tech}
                        className={`filter-btn ${selected === tech ? 'active' : ''}`}
                        onClick={() => setSelected(tech)}
                        aria-pressed={selected === tech}
                    >
                        {tech}
                    </button>)}
            </div>
        </section>
    )
}

export default Projects