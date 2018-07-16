import React, { Component } from 'react';
import './css/Work.css';

import myProjects from '../projects';
import WorkBox from './WorkBox';
import Filter from './Filter';
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

    handleFilter(e) {
        const keyword = e.target.innerHTML;
        const btn  = e.target;
console.log(e.target.className)
        // turn filter on
        if (!this.state.filter) {
            const filtered = myProjects.filter(p => p.tech.indexOf(keyword) >= 0);
            this.setState({ filter: keyword });
            this.setState({ projects: filtered });
        // switch filter
        } else if (this.state.filter !== keyword) {
            const filtered = myProjects.filter(p => p.tech.indexOf(keyword) >= 0);
            this.setState({ filter: keyword });
            this.setState({ projects: filtered });
        // turn filter off
        } else {
            this.setState({ filter: false });
            this.setState({ projects: myProjects });
        }
    }
    onMouseEnter(e) {   // start animation for WorkBox
        const el = e.target.childNodes[0] || e.target.parentNode.childNodes[0];
        if (!el) { console.error("Work44:", "!el"); return; }
        el.className = "work-box-img";
        setTimeout(() => el.classList += " work-box-img-extend", 300);
        setTimeout(() => el.classList += " work-box-img-active", 900);
    }
    onMouseLeave(e) {   //reset animation
        const el = e.target.childNodes[0];
        if (!el) return;
        console.log("before", el.className);
        el.className = "work-box-img";
        console.log("after", el.className);
    }
    handleOverlay(p) {  //overlay
        this.state.overlay.visible ? 
            this.setState({ overlay: { p: this.state.overlay.p, visible: false } }) 
            : 
            this.setState({ overlay: { p: p, visible: true } });
    }

    render() {
        const projects = this.state.projects; //this.state.filter ? this.state.filtered : this.state.projects;
        const icons = [ "fas fa-chart-pie", "fas fa-cloud", "fas fa-circle", "fas fa-film", "fas fa-map", "fas fa-clock", "fas fa-desktop", "fas fa-th", "fas fa-calculator" ];

        if (projects) {
            return (
                <div className='work'>

                    <Overlay p={ this.state.overlay.p } visible={ this.state.overlay.visible } handleOverlay={ this.handleOverlay } />
                    
                    <h1>Featured Work</h1>

                    <Filter isActive={ this.state.filter } onClick={ this.handleFilter } />
                    
                    { //if no projects with currently active filter
                        this.state.filter && !this.state.projects[0] ? 
                        <div className="no-projects"><h2>No projects found.</h2><p>I update these regularly so you could perhaps consider checking back in a bit..</p></div> 
                        : null 
                    }

                        { //append Projects and alternate between bgColor
                        this.state.projects.map((p, i) => {
                            if( i % 2 === 0 ) {
                                return(<WorkBox i={ icons[i] } p={ p } brightness="bright" onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } onClick={ e => this.handleOverlay(projects[i]) } key={i} />)
                            } else {
                                return(<WorkBox i={ icons[i] } p={ p } brightness="dark" onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } onClick={ e => this.handleOverlay(projects[i]) } key={i} />)
                            }
                        })}
                    
{/* projects.map((p, i) => <WorkBox project={p} key={i} />) */}                

                </div>
            );
        } else { return ( <div> no projects </div> ); }
    }
}

export default Work;