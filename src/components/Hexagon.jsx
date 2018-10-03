import React from 'react';
import './css/Hexagon.css';

export const Hexagon = (props) => {
    return(
        <div className='clear-hexagon'>
            <div className='clear-hex-top'></div>
            <div className='clear-hex-body'></div>
            <div className='clear-hex-bot'></div>
        </div>
    );
}

export const HexagonGrid = (props) => {
  const m = props.margin;
    return(
        <div className='clear-hex-grid' style={ m ? m : null }>
            <div className='clear-hex-row-even'>
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className='clear-hex-row'>
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className='clear-hex-row-even'>
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className='clear-hex-row'>
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className='clear-hex-row-even'>
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
        </div>
    );
}