import React from "react";
import "./css/Hexagon.css";

const Hexagon = () => {
    return(
        <div className="hexagon">
            <div className="hex-top"></div>
            <div className="hex-body"></div>
            <div className="hex-bot"></div>
        </div>
    );
}

const HexagonGrid = () => {
    return(
        <div className="hex-grid">
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

export default HexagonGrid;