import { Component } from 'react';
import './heroImage.css';
export class HeroImage extends Component{
    render(){
        return(
            <div className='hero__img'>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>

                </div>
            </div>
        )

    }

}