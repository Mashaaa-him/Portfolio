import { useFetch } from '../hooks/useFetch'

function Writing() {
  const { data: posts, status } = useFetch('/api/posts')

  return (
    <section className="writing">
      <h2>on the page</h2>

      {status === 'loading' && <p className="load-note">loading…</p>}
      {status === 'error' && <p className="load-note">couldn't load the posts.</p>}

      {status === 'ready' && (
        <ul className="writing-list">
          {posts.map(({ title, teaser, href }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer" className="post">
                <span className="post-title">{title}</span>
                <span className="post-teaser">{teaser}</span>
                <span className="post-cta">read on Substack →</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Writing