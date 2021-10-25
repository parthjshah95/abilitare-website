import React from 'react'
import CardItem from './CardItem'
import '../Assets/CSS/Cards.css';
import image from '../../../images/temp-device.jpeg'  

function Cards() {
    return (
        <div className='cards'>
            <h1>Head Mouse</h1>
            <div className="cards__container">
                <div className="class__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={image}
                        text="Lorem ipsum dolor sit amet. Dolores quas qui"
                        label='Placeholder'
                        path='/services'
                        />
                        <CardItem 
                        src={image}
                        text="Lorem ipsum dolor sit amet. Dolores quas qui"
                        label='Placeholder'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={image}
                        text="Lorem ipsum dolor sit amet. Dolores quas qui"
                        label='Placeholder'
                        path='/services'
                        />
                        <CardItem 
                        src={image}
                        text="Lorem ipsum dolor sit amet. Dolores quas qui"
                        label='Placeholder'
                        path='/services'
                        />
                        <CardItem 
                        src={image}
                        text="Lorem ipsum dolor sit amet. Dolores quas qui"
                        label='Placeholder'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
