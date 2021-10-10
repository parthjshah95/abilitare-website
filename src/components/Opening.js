import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Opening.css';

function Opening() {
    return (
        <div className='top-page'>
            <div className='left-side'>
                <div className='hero-container'>
                    <h1>Abilitare</h1>
                    <div className='short-info'>
                    <p>Lorem ipsum dolor sit amet. Dolores quas qui architecto nulla ex laborum voluptatem non autem qui architecto</p>
                    </div>
                    <div className="hero-btns">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            Sign Up for a Demo Now!
                        </Button>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <div className='hero-container'></div>
            </div>
        </div>
    )
}

export default Opening
