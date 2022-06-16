import './pricing.css';
import {Link} from 'react-router-dom';
export const PricingComp=()=>{
    return(
        <div className="pricing">
            <div className="card__container">
                <div className="card">
                    <h3 className="pricing__heading">- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Wievs -</p>
                    <p>- Featured -</p>
                    <p>- Pirivate Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className="card">
                    <h3 className="pricing__heading">- Suite -</h3>
                    <span className="bar"></span>
                    <p className="btc">1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Wievs -</p>
                    <p>- Featured -</p>
                    <p>- Pirivate Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className="card">
                    <h3 className="pricing__heading">- Executive -</h3>
                    <span className="bar"></span>
                    <p className="btc">1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Wievs -</p>
                    <p>- Featured -</p>
                    <p>- Pirivate Quaters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )

}