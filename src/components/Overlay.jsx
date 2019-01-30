import React from 'react';
import './css/Overlay.css';
import NavBarIcon from "../components/NavBarIcon";

const Overlay = ({ p, visible, handleOverlay }) => {
	if (p) {
		return(
        	<div className={ visible ? "overlay overlay-active" : "overlay" }>
                <NavBarIcon onClick={ handleOverlay } transform={ true } />
        		<div className="overlay-container">
                    <h2>{ p.title }</h2>
                    { p.link && <a href={ p.link } target="_blank" rel="noopener noreferrer"><button className="overlay-btn">View live</button></a> }
                    { p.repo && <a href={ p.repo } target="_blank" rel="noopener noreferrer"><button className="overlay-btn">View repository</button></a> }
                    <p><em>{ p.tagline }</em></p>
                    
                    {/*
                        p.features &&
                        p.features.map((f, i) => <p style={{ textAlign: "left" }}>{ f }</p>)
                    */}
                    
                    <div className="overlay-image-container">
                    {/*
                        p.images &&
                        p.images.map((img, i) => <img className="overlay-img" 
                                                      alt="p-img" 
                                                      src={ `${process.env.PUBLIC_URL}/images/${img}` } />)
                    */}

                    {
                        p.features.map((f, i) => {
                            return (
                                <TextImgBox text={ f } img={ p.images[i] && `${process.env.PUBLIC_URL}/images/${p.images[i]}` } i={i} />
                            );
                        })
                    }
                    </div>
                    
                    <div className="tech">
                        { p.tech.map((t, i) => <button>{ t }</button>) }
                    </div>
                </div>
            </div>
		)
	}
    return(
        <div className="overlay">error</div>
    );
}

export default Overlay;

const TextImgBox = ({ text, img, i }) => {
    return (
        <div className="TextImgBox" style={ i % 2 !== 0 ? { textAlign: "right" } : null } >
            { text && <p>{ text }</p> }
            { img && <img src={ img } className="overlay-img" alt="p-img" /> } 
        </div>
    );
}