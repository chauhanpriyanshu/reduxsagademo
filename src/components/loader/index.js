import React from 'react'
import { Spinner } from "react-bootstrap";
import './style.scss'

function Loader() {
  return (
    <div className='loader-wrapper'>
        <h3 className='loader-title'>Loading Data</h3>
        <svg className="spin" width="50.098" height="50.098" viewBox="0 0 50.098 50.098">
            <g id="Group_611" data-name="Group 611" transform="translate(-154.951 -279.951)">
                <path id="Path_1026" data-name="Path 1026" d="M16.837,0A16.837,16.837,0,1,1,0,16.837" transform="translate(203 311.163) rotate(150)" fill="#fff" stroke="#6495ed" stroke-linecap="round" stroke-width="3"/>
                <path id="Path_1027" data-name="Path 1027" d="M9.794,0A9.794,9.794,0,1,1,0,9.794" transform="translate(170.206 295.206)" fill="#fff" stroke="#6495ed" stroke-linecap="round" stroke-width="3"/>
            </g>
        </svg>
    </div>
  )
}

export default Loader