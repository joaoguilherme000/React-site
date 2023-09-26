import React from "react";
import './Tasklist.css'

export default function Tasklist(props) {
    return (
        <div className="tasklist">
            <div className="title">{props.title}</div>
            <div className="content"></div>
        </div>
    )
}