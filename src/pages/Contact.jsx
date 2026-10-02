import { contacts } from "../data/contacts";

function Contact() {
    return (
        <section className="page contact">
            <h1>Woza</h1>
            <p>I'm always up for talking tech, writing, guitar, swimming, and everything in between. Feel free to shoot a text through:</p>

            <div className="contact-links">
                {contacts.map(({ label, href, icon: Icon}) => (
                    <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="contact-link"
                    >
                    <><Icon size={20} /><span>{label}</span></>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contact