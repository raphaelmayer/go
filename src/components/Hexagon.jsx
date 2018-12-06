import React from "react";
import "./css/Hexagon.css";

export const Hexagon = (props) => {
    return(
        <div className="hexagon">
            <div className="hex-top"></div>
            <div className="hex-body"></div>
            <div className="hex-bot"></div>
        </div>
    );
}

export const HexagonGrid = (props) => {
  const m = props.margin;
    return(
        <div className="hex-grid" style={ m ? m : null }>
            <div className="hex-row-even">
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className="hex-row">
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className="hex-row-even">
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className="hex-row">
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
            <div className="hex-row-even">
                <Hexagon />
                <Hexagon />
                <Hexagon />
                <Hexagon />
            </div>
        </div>
    );
}