import React from 'react'
import Style from "styled-jsx"

interface Props {
    label:string
}

export default function Result(props:Props) {
    return (
        <div className="result">
            {props.label}
            <style jsx>
                {`
                .result {
                    width:100vw;
                    position:fixed;
                    top:0;
                    left:0;
                    right:0;
                    background:#000;
                    color:#fff;
                    height:90px;
                    text-align:right;
                    font-size:45px;
                    vertical-align:miidle;
                }
                `}
            </style>
        </div>
    )
}
