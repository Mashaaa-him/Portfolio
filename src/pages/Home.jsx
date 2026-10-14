import { Link } from 'react-router-dom'
import Currently from '../components/Currently'

function Home() {
  return (

    <section className="welcome">
      <p className="welcome-eyebrow">macharia.dev</p>
      <p className="welcome-line">hey, I'm Macharia. welcome to my corner of the internet</p>
      <p className="welcome-quote">"There's only ten good men left on earth, and it's just me and my homies."</p>
      <p className="welcome-attribution">-Gandhi</p>
      <div className="welcome-links">

       

        <nav className='welcome-links'>
          <Link to="/about">about me</Link>
          <Link to="/skills">skills</Link>
          <Link to="/persona">the playlist</Link>
        </nav>
      </div>
    </section>
  )
}

export default Home