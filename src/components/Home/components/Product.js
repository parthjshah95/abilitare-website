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
            <div className="product-section2">
                <div className="top-section">
                    <div className="top-left">
                        <div className="img-holder">
                            <div className="main-img">
                                <img src={nano} />
                            </div>
                            <div className="main-img">
                                <img src={nano_headband_worn} />
                            </div>
                        </div>
                    </div>
                    <div className="top-right">

                    </div>
                </div>
                <div className="bottom-section">
                    <div className="bottom-left">

                    </div>
                    <div className="bottom-right">
                        <div className="img-holder">
                            <div className="main-img">
                                <img src={nano} />
                            </div>
                            <div className="main-img">
                                <img src={nano_headband_worn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product