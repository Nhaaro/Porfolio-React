import React, { Component } from "react";
import "./Cover.css";

export default class Cover extends Component {
  render() {
    return (
      <div className="main">
        <div className="Cover">
          <h1>Alan Laredo</h1>
          <p>
            a productivity geek, always looking for ways to automate and
            optimize processes
          </p>
        </div>
        <a className="scroll-link" href="#">
          <svg
            className="mouse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 130"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fill-rule="evenodd">
              <rect
                width="70"
                height="118"
                x="1.5"
                y="1.5"
                stroke="#FFF"
                stroke-width="3"
                rx="36"
              />
              <circle
                className="scroll"
                cx="36.5"
                cy="31.5"
                r="4.5"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
      </div>
    );
  }
}
