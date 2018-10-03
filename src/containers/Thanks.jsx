import React from 'react';

const Thanks = () => {
    const url = window.location.href.split("/");

	if (url[url.length-1] === "thanks") {
		return (
			<div className="thanks">
				<div>Thank you for contacting me. I make sure to respond soon.</div>
			</div>
		)
	} else return null;
}

export default Thanks;
     