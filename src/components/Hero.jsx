import '../App.css';
import profileImg from '../assets/profile.jpeg';

function Hero() {
    return(
        <section className='hero'>
            <h1>Allan Macharia</h1>
            <p>An Aspiring Full-Stack Developer</p>
            <img src={profileImg} alt="Him" className='hero-img' />
        </section>

    )
}
export default Hero