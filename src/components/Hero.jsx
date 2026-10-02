import '../App.css';
import profileImg from '../assets/profile.jpeg';

function Hero() {
    return(
        <section className='hero'>
            <h1>Hey, I'm Allan 👋🏿</h1>
            <p className='tagline'>An Aspiring Full-Stack Developer who drinks too much Redbull.</p>
            <img src={profileImg} alt="Him" className='hero-img' />
        </section>

    )
}
export default Hero