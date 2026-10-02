import { skills } from "../data/skills"

function Skills() {
    return (
        <section className="page skills">
            <h1>Skills</h1>
            {skills.map((group) => (
                <div key={group.category} className="skill-group">
                    <h2>{group.category}</h2>
                    <ul className="skill-list">
                        {group.items.map((item) =>(
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Skills