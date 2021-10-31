import React from 'react';
import nano from '../../../images/nano.jpg';
import nano_headband_worn from '../../../images/nano_headband_worn.jpg';
import earable from '../../../images/earable.jpg'
import earable_worn from '../../../images/earable_worn.jpg'
import Card from './CardItem';
import '../Assets/CSS/Product.css';

function Product() {
    return (

        <div className="product-section">
            <div className="top-section">
                <div className="top-left">
                    <div className="main-img">
                        <img className="img-final" src={earable} />
                        <img className="img-final" src={earable_worn} />
                    </div>
                </div>
                <div className="top-right">
                    <h1>Upcoming MVP</h1>
                    <p>Earable sensors are tiny, discrete, <br/>comfortable and portable.</p>
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-left">
                <h1>Current Beta Prototype</h1>
                    <p>The prototype that is being used for beta trials <br/> is a sensor that can be worn as a headband.</p>
                    
                </div>
                <div className="bottom-right">
                <div className="main-img">
                        <img className="img-final" src={nano} />
                        <img className="img-final" src={nano_headband_worn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product