import React from 'react';
// import nano from '../../../images/nano.jpg';
// import nano_headband_worn from '../../../images/nano_headband_worn.jpg';
// import earable from '../../../images/earable.jpg'
// import earable_worn from '../../../images/earable_worn.jpg'
import nano_new from '../../../images/PXL_20211128_013221847.PORTRAIT.jpg';
import switch_standalone from '../../../images/PXL_20211128_013257981.PORTRAIT.jpg';
import nano_headphone_worn from '../../../images/PXL_20211128_005427071.PORTRAIT.jpg';
import switch_shoe from '../../../images/PXL_20211128_014658404.PORTRAIT.jpg';
import Card from './CardItem';
import '../Assets/CSS/Product.css';

function Product() {
    return (

        <div className="product-section">
            <div className="top-section">
                <div className="top-left">
                    <div className="main-img">
                        <img className="img-final" src={nano_new} />
                    </div>
                    <div className="main-img">
                        <img className="img-final" src={nano_headphone_worn} />
                    </div>
                </div>
                <div className="top-right">
                    <h1>Abili Mouse</h1>
                    <div className="short-info1">
                    <p>Move mouse cursor using your head. Attaches to a headband, cap or headphone.</p>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-left">
                    <h1>Abili Switch</h1>
                    <div className="short-info2">
                    <p>Bluetooth adaptive switch with feather-touch. Use with elbows, feet or fists.</p>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="main-img">
                        <img className="img-final" src={switch_standalone} />
                        
                    </div>
                    <div className="main-img">
                        
                        <img className="img-final" src={switch_shoe} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product