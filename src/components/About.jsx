import aboutImg from '../assets/Him.jpg'
function About() {
  return (
    <section className="page about">
      <div className='about-content'>
        <img src={aboutImg} alt='Macharia' className='about-img' />

        <div className='about-text'>
          <p>Macharia is a student at Kabarak University pursuing his degree in Computer Science.</p>
          <p>
            He is a tech enthusiast who finds peace in solving problems using dynamic technical solutions.
            He has taken part in a number of <u>projects</u> including the <i>Event and Ticketing System</i>, which he, together with a group of friends,
            made as their team project.
          </p>
          <p>
            Apart from being tech-savvy, Macharia is also a writer who likes sharing his thoughts
            and opinions on various topics in life. He currently does technical writing at the <strong>Google Developers Group On Campus Kabarak</strong>, where he showcases his mild obsession with writing.
          </p>
        </div>
      </div>
      <p className='about-nudge'>Want to chat? Slide down, or just email me - I reply.</p>
    </section>
  )
}

export default About