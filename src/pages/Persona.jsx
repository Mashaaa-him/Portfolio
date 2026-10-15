import OnRepeat from "../components/OnRepeat";
import Writing from "../components/Writing";

function Persona() {
    return (
        <section className="page persona">
            <h1>Persona</h1>
            <p className="persona-intro">The parts of Macharia that keep him alive. Other than coffee of course.</p>
            <OnRepeat />
            <br />
            <Writing />
        </section>
    )
}

export default Persona