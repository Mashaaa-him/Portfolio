import { contacts } from "../data/contacts";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                {contacts.map(({ label, href, icon: Icon}) => (

                    key={label},
                    href={href},
                    target={href.startsWith('mailto:') ? undefined : '_blank'},
                    aria-label={label},
                    className="footer-link"
                    >
                    <Icon size={20} />
                ))}
                <p className="footer-text">
                  © {new Date().getFullYear()} Allan Macharia. Built with React. And a whole lot of Redbulls.    
                </p>
            </div>
        </footer>
    )
}

export default Footer