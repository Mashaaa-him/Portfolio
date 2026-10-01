import { contacts } from "../data/contacts";

function Contact() {
    return (
        <section className="page-contact">
            <h1>Get in touch with me.</h1>
            <p>Feel free to send a 'Hey' through any of these. It would be lovely to hear from you.</p>

            <div className="contact-links">
                {contacts.map(({ label, href, icon: Icon}) => (
                    <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.starsWith('mailto:') ? undefined : 'noreferrer'}
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