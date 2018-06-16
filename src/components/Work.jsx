import React, { Component } from 'react';
import './css/Work.css';

import myProjects from '../projects';
//import WorkBox from './WorkBox';
import TestBox from './TestBox';
import Overlay from './Overlay';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: myProjects,
            filter: false,
            overlay: { p: null, visible: false },
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handleOverlay = this.handleOverlay.bind(this);
    }
    componentDidMount() {
        //this.setState({ projects: myProjects });
        //this.setState({ filtered: myProjects });
    }

    handleFilter(e) {
        const keyword = e.target.innerHTML;

        if (this.state.filter) {
            this.setState({ filter: false });
            this.setState({ projects: myProjects });
        } else {
            const filtered = this.state.projects.filter(p => p.tech.indexOf(keyword) >= 0);
            console.log(filtered);
            this.setState({ filter: keyword });
            this.setState({ projects: filtered });
        }
    }
    onMouseEnter(e) {
        const el = e.target.childNodes[0] || e.target.parentNode.childNodes[0];
        if (!el) { console.error("Work44:", "!el"); return; }
        el.className = "test-box-img";
        setTimeout(() => el.classList += " test-box-img-extend", 300);
        setTimeout(() => el.classList += " test-box-img-active", 900);
    }
    onMouseLeave(e) {
        const el = e.target.childNodes[0];
        if (!el) return;
        console.log("before", el.className);
        el.className = "test-box-img";
        console.log("after", el.className);
    }
    handleOverlay(p) {
        this.state.overlay.visible ? 
            this.setState({ overlay: { p: this.state.overlay.p, visible: false } }) 
            : 
            this.setState({ overlay: { p: p, visible: true } });
    }

    render() {
        const projects = this.state.projects; //this.state.filter ? this.state.filtered : this.state.projects;
        const icons = [ "fas fa-chart-pie", "fas fa-cloud", "fas fa-circle", "fas fa-film", "fas fa-map", "fas fa-clock", "fas fa-desktop", "fas fa-th", "fas fa-calculator" ]

        const Filter = (props) => {
            return(
                <div className='filter-container'>
                    <div className='filter'>
                        <button id='Front-End' onClick={ this.handleFilter }>Website</button>
                        <button id='Front-End' onClick={ this.handleFilter }>Front-End</button>
                        <button id='Full-Stack' onClick={ this.handleFilter }>Full-Stack</button>
                        <button id='React.js' onClick={ this.handleFilter }>React.js</button>
                        <button id='jQuery' onClick={ this.handleFilter }>jQuery</button>
                        <button id='d3.js' onClick={ this.handleFilter }>d3.js</button>
                    </div>
                    { this.state.filter ? <p>Active Filter: <strong>{this.state.filter}</strong></p> : <p>Active Filter: none</p> }
                </div>
            );
        }

        if (projects) {
            return (
                <div className='work'>

                    <Overlay p={ this.state.overlay.p } visible={ this.state.overlay.visible } handleOverlay={ this.handleOverlay } />
                    
                    <h1>Featured Work</h1>
                    <div><button onClick={ (e) => console.log(this.state) }>this.state</button></div>

                    <Filter />
                    
                    { //if no projects with currently active filter
                        this.state.filter && !this.state.projects[0] ? 
                        <div className="no-projects"><h2>No projects found.</h2><p>I update these regularly so you could perhaps consider checking back in a bit..</p></div> 
                        : null 
                    }

                        { //append Projects and alternate between bgColor
                        this.state.projects.map((p, i) => {
                            if( i % 2 === 0 ) {
                                return(<TestBox i={ icons[i] } p={ p } brightness="bright" onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } onClick={ e => this.handleOverlay(myProjects[i]) } key={i} />)
                            } else {
                                return(<TestBox i={ icons[i] } p={ p } brightness="dark" onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } onClick={ e => this.handleOverlay(myProjects[i]) } key={i} />)
                            }
                        })}
                    
{/* projects.map((p, i) => <WorkBox project={p} key={i} />) */}                

                </div>
            );
        } else { return ( <div> no projects </div> ); }
    }
}

export default Work;