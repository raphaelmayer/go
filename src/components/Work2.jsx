import React, { Component } from 'react';
import projects from '../projects';
import './css/Hexagon.css';

import { Hexagon, HexagonDisplay } from './Hexagon';

class Work2 extends Component {
constructor(props) {
    super(props);
    this.state = { display: {t: null, d: null}, projects: null };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

}
componentDidMount() {
    this.setState({ projects });
}
onMouseEnter(e) {
    const display = {t: e.target.attributes.t.value, d: e.target.attributes.d.value};
    this.setState({ display });
}
onMouseLeave(e) {
    const display = { t: null, d: null };
    this.setState({ display });
}
render() {
if(this.state.projects) {
        const p = this.state.projects
        return(
            <div className='hex-grid'>
                <div className='hex-row-even'>
                    <Hexagon t={p[0].title} d={p[0].desc} bg={p[0].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[1].title} d={p[1].desc} bg={p[1].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[2].title} d={p[2].desc} bg={p[2].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[3].title} d={p[3].desc} bg={p[3].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[4].title} d={p[4].desc} bg={p[4].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                </div>
                <div className='hex-row'>
                    <HexagonDisplay toDisplay={ null } />
                    <HexagonDisplay toDisplay={ this.state.display.t } />
                    <HexagonDisplay toDisplay={ this.state.display.d } small={ true } />
                    <HexagonDisplay toDisplay={ null } />
                </div>
                <div className='hex-row-even'>
                    <Hexagon t={p[5].title} d={p[5].desc} bg={p[5].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[6].title} d={p[6].desc} bg={p[6].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[7].title} d={p[7].desc} bg={p[7].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                    <Hexagon t={p[8].title} d={p[8].desc} bg={p[8].images[0]} onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } />
                </div>
            </div>
        );
    } else return <div>asd</div>
    }
}
export default Work2;