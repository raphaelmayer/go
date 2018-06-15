import React from 'react';
import './css/WorkBox.css';

const WorkBox = (props) => {
	const { project } = props;
	return (
       <div className="work-box">
           <img src={ '../images/' + project.images[0] } />
           <div className="work-box-text"> { project.title } </div>
           <div className="work-box-tech"> { project.tech.join(", ") } </div>
       </div>
	);
}

export default WorkBox;