import React, { Component } from 'react';
import Header from './Header';
import Image from './Image';
import Message from './Message';
import Footer from './Footer';
import '../index.css';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <Header />
                <Image />
                <Message />
                <Footer />
            </div>
        )
    }
}

export default Card;