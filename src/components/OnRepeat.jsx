import { music } from "../data/music";

function OnRepeat () {
    return (
        <section className="on-repeat">
            <h2>on repeat</h2>
            <ul className="on-repeat-grid">
                {music.map(({title, artist, note, href}) => (
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
        </section>
    )
}

export default OnRepeat