import React, { Component } from 'react';

const WorkBox = (props) => {
    const { p, i, brightness, onClick, onMouseEnter, onMouseLeave } = props;
    return(
        <div className={ "work-box " + brightness } 
             onMouseEnter={ (e) => onMouseEnter(e) }
             onMouseLeave={ (e) => onMouseLeave(e) } 
             onClick={ onClick }>
    
            <img alt="" className="work-box-img" src={ "./images/" + p.images[0] }></img>
            <i className={ i }></i>
            <div className="work-box-text">{ p.title }</div>
        </div>
    );
}

export default WorkBox;