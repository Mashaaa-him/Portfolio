import Currently from './Currently'
import aboutImg from '../assets/mash.jpeg'
function About() {
  return (
    <section className="page about">
      <div className='about-content'>
        <aside className='about-aside'>
          <figure className='about-figure'>
            <img src={aboutImg} alt="Macharia, making business calls" className='about-img' />
            <figcaption>exhibit A:</figcaption>
          </figure>
          <Currently />
        </aside>
        <div className='about-text'>
          <p>Macharia is a Computer Science student at Kabarak University who genuinely believes that a well-placed semicolon can fix almost anything. (Almost)</p>
          <p>
            He's the kind of enthusiast who doesn't just use technology; he takes it apart, figures out why it works and then builds something better with it.
            Case in point: he and a few equally brilliant friends teamed up to build an Event Management and Ticketing System. It works. It's sleek. And yes, they're still on speaking terms.
          </p>
          <p>
            When he's not buried in code, Macharia is buried in words - voluntarily this time. He's a writer at heart, sharing his thoughts on life, tech and everything in between.
            You'll find his musings over at <a href='https://substack.com/@1mashaa'>his Substack</a>, where he indulges his slight obsession with putting ideas on paper.
          </p>
          <p>
            And when he needs a break from both screens and syntax? You'll find him in the water. Swimming is his reset button; a few laps, a clear head and he's ready to debug life again.
          </p>
          <p className='about-signoff'>
            Part engineer, part storyteller, part fish - fully caffeinated. That's Macharia.
          </p>
        </div>
      </div>

      <p className='about-nudge'>Want to chat? Slide down to find my contact details- I reply.</p>
    </section>
  )
}

export default About