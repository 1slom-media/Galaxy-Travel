import './footer.css';
import { FaInstagram,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from 'react-icons/fa';
export const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color:'#fff',marginRight:"32px"}}/>
                        <div>
                            <p className="footer__text location__text">53 Gulobod st.</p>
                            <h4 className="footer__heading location__heading">Farovon, MFY</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4 className="footer__heading"><FaPhone size={20} style={{color:'#fff',marginRight:"32px"}}/> 90-153-6x-xx</h4>
                    </div>
                    <div className="email">
                        <h4 className="footer__heading"><FaMailBulk size={20} style={{color:'#fff',marginRight:"32px"}}/> itagayev@gmail.com</h4>
                    </div>
                </div>
                <div className="footer__right">
                    <h4 className="footer__heading">About the company</h4>
                    <p className="footer__text">
                        "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam"
                    </p>
                    <div className="footer__socials">
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '16px' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '16px' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '16px' }} />
                    </div>
                </div>
            </div>
        </div>

    )

}