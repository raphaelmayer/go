import React from 'react';
import './css/Page.css';

const Page = (props) => {
	const { title, title2, text } = props.content || null;

	if (props.color === 'white') {
		return (
			<div className='page pageAlt' id={ props.id } >
				<div className='left'>
					<h1> { title } </h1>
					<div className='text'>
						{ text.map( (p, i) => <p key={i}> { p } </p> ) }
					</div>
				</div>
				<div className='right'>
					<h2> { title2 } </h2>
					<div className='stats'></div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='page' id={ props.id } >
				<div className='left'>
					<h1> { title } </h1>
					<div className='text'>
						{ text.map( (p, i) => <p key={i}> { p } </p> ) }
					</div>
				</div>
				<div className='right'>
					<h2> { title2 } </h2>
					<div className='stats'></div>
				</div>
			</div>
		);
	}
}

export default Page;