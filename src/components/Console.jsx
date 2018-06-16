import React, { Component } from 'react';
import './css/Console.css';

const Console = () => {
    window.onload = () => {
        const el = document.querySelector(".console");
        if (!el) { console.error("Console7:", "!el"); return; }
        el.className = "console";
        setTimeout(() => el.classList += " console-extend", 100);
        setTimeout(() => el.classList += " console-active", 800);
    }
    return (
        <div className='console'>
            <div className="console-bar">
              <div className="console-btns cb-close"></div>
              <div className="console-btns cb-minimize"></div>
              <div className="console-btns cb-zoom"></div>
            </div>
            <div className="console-screen">
                <p className="line1"> &#91;&nbsp;&ldquo;Hi, my name's Raphael.&rdquo;, <span className="cursor1">_</span> </p>
                <p className="line2"> &nbsp;&nbsp;&ldquo;I'm a full stack developer.&rdquo;, <span className="cursor2">_</span> </p>
                <p className="line3"> &nbsp;&nbsp;&ldquo;Welcome to my portfolio!&rdquo;&nbsp;&#93; <span className="cursor3">_</span> </p>
                <p className="line4"> > <span className="cursor4">_</span> </p>
            </div>
        </div>
    );
}

export default Console;

