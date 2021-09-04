import React, { useEffect, useRef } from 'react'
import "./intro.scss";
import {init} from 'ityped';
function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["React","MongoDB","Express","Node.js"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Harsh Mathur</h1>
                    <h3>Fullstack Developer</h3>
                    <h3>{"<"}<span ref={textRef}></span>{">"}</h3>
                </div>

                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
