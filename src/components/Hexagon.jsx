import React from 'react';
import './css/Hexagon.css';

export const Hexagon = (props) => {
    if (props.bg) {
    const style = { 
        background: 'url(../images/' + props.bg + ')', 
        backgroundPosition: 'center', 
        backgroundSize: '200%',
    };
    const t = props.t ? props.t : null;
    const d = props.d ? props.d.desc : null;
    return(
        <div className='hexagon' style={ style } onMouseEnter={props.onMouseEnter ? e => props.onMouseEnter(e) : null } onMouseLeave={e => props.onMouseLeave(e)}>
            <div t={t} d={d} className='hex-top'></div>
            <div t={t} d={d} className='hex-body'></div>
            <div t={t} d={d} className='hex-bot'></div>
        </div>
    );
    } else {
    return(
        <div className='hexagon'>
            <div className='hex-top'></div>
            <div className='hex-body'></div>
            <div className='hex-bot'></div>
        </div>
    );
    }
}

export const HexagonDisplay = (props) => {
    const display = props.toDisplay !== null ? props.toDisplay : null;
    if (props.small) {
        return(
            <div className='hexagon'>
                <div className='hex-top'></div>
                <div className='hex-body'>{<div id='display' ><small>{display}</small></div>}</div>
                <div className='hex-bot'></div>
            </div>
        );
    } else {
        return(
            <div className='hexagon'>
                <div className='hex-top'></div>
                <div className='hex-body'>{<div id='display' >{display}</div>}</div>
                <div className='hex-bot'></div>
            </div>
        );
    }
}

//export const HexGrid = (props) => {
//    const p = props.projects;
//    console.log(p)
//    const d = props.display;
//    if (!p) { return( <div> no projects </div> ) }
//    return(
//        <div className='hex-grid'>
//            <div className='hex-row-even'>
//                <Hexagon p={p[0]} bg={ p[0].images[0] } onMouseEnter={ props.onMouseEnter } />
//                <Hexagon p={p[1]} bg={ p[1].images[0] } onMouseEnter={ props.onMouseEnter } />
//                <Hexagon p={p[2]} bg={ p[2].images[0] } onMouseEnter={ props.onMouseEnter } />
//                <Hexagon p={p[3]} bg={ p[3].images[0] } onMouseEnter={ props.onMouseEnter } />
//            </div>
//            <div className='hex-row'>
//                <Hexagon />
//                <Hexagon />
//                <Hexagon />
//                <Hexagon d={ d } />
//            </div>
//            <div className='hex-row-even'>
//                <Hexagon p={p[4]} bg={ p[4].images[0] } onMouseEnter={ props.onMouseEnter } />
//                <Hexagon p={p[5]} bg={ p[5].images[0] } onMouseEnter={ props.onMouseEnter } />
//                <Hexagon p={p[6]} bg={ p[6].images[0] } onMouseEnter={ props.onMouseEnter } />
//            </div>
//        </div>
//    );
//}

//#######################################################
export const HexagonClear = (props) => {
    return(
        <div className='clear-hexagon'>
            <div className='clear-hex-top'></div>
            <div className='clear-hex-body'></div>
            <div className='clear-hex-bot'></div>
        </div>
    );
}

export const HexGridClear = (props) => {
  const c = props.color;
  const m = props.margin;
  console.log(m)
    return(
        <div className='clear-hex-grid' style={ m ? m : null }>
            <div className='clear-hex-row-even'>
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
            </div>
            <div className='clear-hex-row'>
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
            </div>
            <div className='clear-hex-row-even'>
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
            </div>
            <div className='clear-hex-row'>
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
            </div>
            <div className='clear-hex-row-even'>
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
                <HexagonClear />
            </div>
        </div>
    );
}