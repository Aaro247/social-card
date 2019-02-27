import React, { Component } from 'react';
import userImage from '../images/alphabet_A.png';
import '../index.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='header-image' src={userImage} alt='A' />
                <div className='header-name-column'>
                    <div className='header-name'>
                        Aarohi Ajgaonkar
                    </div>
                    <div className='header-name'>
                        4:20 pm
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;