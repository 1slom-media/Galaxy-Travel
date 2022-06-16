import './hero.css';
import spaceVideo from '../../assets/space.mp4';
import { Link } from 'react-router-dom';

export const Hero=()=>{
    return(
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={spaceVideo} type='video/mp4'/>
            </video>
            <div className="hero__content">
                <h1 className='hero__heading'>Galaxy. Travel.</h1>
                <p className="hero__text">
                    World's first civilian space travel.
                </p>
                <div className="hero__links">
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn_light'>Launch</Link>
                </div>
            </div>
        </div>
    )


}