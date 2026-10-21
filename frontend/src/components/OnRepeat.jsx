import { useFetch } from '../hooks/useFetch'

function OnRepeat() {
  const { data: music, status } = useFetch('/api/music')

  return (
    <section className="on-repeat">
      <h2>on repeat</h2>

      {status === 'loading' && <p className="load-note">loading…</p>}
      {status === 'error' && <p className="load-note">couldn't load the playlist.</p>}

      {status === 'ready' && (
        <ul className="on-repeat-grid">
          {music.map(({ title, artist, note, href }) => (
            <li key={`${title}-${artist}`} className="track">
              <p className="track-title">{title}</p>
              <p className="track-artist">{artist}</p>
              <p className="track-note">{note}</p>
              {href && (
                <a href={href} target="_blank" rel="noreferrer" className="track-link">
                  listen here
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default OnRepeat