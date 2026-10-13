import { currently } from "../data/currently";

function Currently() {
    return(
        <section className="currently">
            <h2>right now</h2>
            <ul className="currently-list">
                {currently.map(({ label, value}) => (
                    <li key={label}>
                        <span className="currently-label">{label}</span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Currently