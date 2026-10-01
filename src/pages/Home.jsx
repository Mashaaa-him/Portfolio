import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

function Home(){
    return (
        <div>
            <Hero />
            <section>
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}

                </div>
            </section>
        </div>
    )
}

export default Home