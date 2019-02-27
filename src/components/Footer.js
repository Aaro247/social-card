import React, { Component } from 'react';
import Icon from 'react-geomicons';
import '../index.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Icon className='footer-icons' name='heart' fill='red' />
                <Icon className='footer-icons' name='chat' fill='grey' />
                <Icon className='footer-icons' name='bookmark' fill='blue' />
                <Icon className='footer-icons' name='tag' fill='green' />
            </div>
        )
    }
}

export default Footer;