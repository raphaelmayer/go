import React, { Component } from 'react';

const WorkBox = (props) => {
    const { p, i, brightness, onClick, onMouseEnter, onMouseLeave } = props;
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

export default WorkBox;