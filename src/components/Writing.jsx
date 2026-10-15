import { posts } from "../data/posts";

function Writing() {
    return (
        <section className="writing">
            <h2>on the page</h2>
            <ul className="writing-list">
              {posts.map(({ title, teaser, href }) => (
                <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer" className="post">
                    <span className="post-title">{title}</span>
                    <span className="post-teaser">{teaser}</span>
                    <span className="post-cta">read on Substack</span>
                </a>
                </li>
              ))}
            </ul>
        </section>
    )
}

export default Writing