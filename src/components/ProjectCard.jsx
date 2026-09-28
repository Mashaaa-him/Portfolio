function ProjectCard({title, description, tech, liveUrl, repoUrl}){
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>

            <ul className="tech-list">
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <div className="project-links">
                <a href="{liveUrl}" target="_blank" rel="nreferrer">Live Demo</a>
                <a href="{repoUrl}" target="_blank" rel="noreferrer">Code</a>
            </div>
        </article>
    )
}
export default ProjectCard