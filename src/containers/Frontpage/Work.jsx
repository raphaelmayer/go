import React, { Component } from 'react';
import './css/Work.css';

import myProjects from '../../projects';
import WorkBox from '../../components/WorkBox';
import Filter from '../../components/Filter';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: myProjects,
            filter: false,
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        const keyword = e.target.innerHTML;
        
        // turn filter on
        if (!this.state.filter) {
            const filtered = myProjects.filter(p => p.tech.indexOf(keyword) >= 0 || p.type === keyword);
            this.setState({ filter: keyword, projects: filtered });
        // switch filter
        } else if (this.state.filter !== keyword) {
            const filtered = myProjects.filter(p => p.tech.indexOf(keyword) >= 0 || p.type === keyword);
            this.setState({ filter: keyword, projects: filtered });
        // turn filter off
        } else {
            this.setState({ filter: false, projects: myProjects });
        }
    }

    render() {
        const projects = this.state.projects; //this.state.filter ? this.state.filtered : this.state.projects;
        const { handleOverlay, themeMode } = this.props;
        if (projects) {
            return (
                <div className={ 'work ' + themeMode } id="Work">
                    <span className="toAppear">
                    <h1>Featured Work</h1>
                    </span>
                    <span className="toAppear">
                    <Filter isActive={ this.state.filter } onClick={ this.handleFilter } count={ projects.length } />
                    </span>
                    
                    { //if no projects with currently active filter
                        this.state.filter && !this.state.projects[0] && <NoProjects /> 
                    }

                    <div className="work-box-container">
                        {   // append Projects and alternate between bgColor
                            this.state.projects.map((p, i) => <span className="toAppear appear"><WorkBox p={p} i={i} onClick={ handleOverlay } key={i} /></span>)
                        }               
                    </div>
                </div>
            );
        } else { return ( <div> no projects </div> ); }
    }
}

export default Work;

const NoProjects = () => {
    return (
        <div className="no-projects">
            <h2>No projects found.</h2>
            <p>I update these regularly so you could perhaps consider checking back in a bit..</p>
        </div>
    );
}