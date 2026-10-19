import { useEffect, useState } from "react";
import ProjectCard from '../components/ProjectCard'
import { data } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([])
    const [status, setStatus] = useState('loading')
    const [selected, setSelected] = useState('All')

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => {
                if (!res.ok) throw new Error('Bad response')
                return res.json()
            })
            .then((data) => {
                setProjects(data)
                setStatus('ready')
            })
            .catch(() => setStatus('error'))
    }, [])

    const allTech = ['All', ...new Set(projects.flatMap((p) => p.tech))]

    const visible =
     selected === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(selected))

    if (status === 'loading') return <p className="page">Loading projects...</p>
    if (status === 'error') return <p className="page">Couldn't load projects. Try again in a bit. You can listen to music in the meantime in <a href=""></a></p>

    return (
        <section className="page projects">
            <h1>Projects</h1>
            <p className="projects-intro">Things I've built and things I'm building.</p>

            <div className="filter-bar">
                {allTech.map((tech) => (
                    <button
                    key={tech}
                    className={`filter-btn ${selected === tech ? 'active' : ''}`}
                    onClick={() => setSelected(tech)}
                    aria-pressed={selected === tech}
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div className="project-grid">
                {visible.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects