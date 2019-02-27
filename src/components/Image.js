import React, { Component } from 'react';
import cardImage from '../images/mountains.jpeg';
import '../index.css'

class Image extends Component {
    render() {
        return (
            <div className='image'>
                <img src={cardImage} alt='Mountains' height='200' width='550' />
            </div>
        )
    }
}

export default Image;