import React, { Component } from 'react';

class TestBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { p, i, brightness, onClick, onMouseEnter, onMouseLeave } = this.props;
        return(
            <div className={ "test-box " + brightness } 
                 onMouseEnter={ (e) => onMouseEnter(e) }
                 onMouseLeave={ (e) => onMouseLeave(e) } 
                 onClick={ onClick }>
    
                <img alt="" className="test-box-img" src={ "./images/" + p.images[0] }></img>
                <i className={ i }></i>
                <div className="test-box-text">{ p.title }</div>
            </div>
        );
    }
}

export default TestBox;