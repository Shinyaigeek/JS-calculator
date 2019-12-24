import React from "react";
import Style from "styled-jsx";

interface Props {
  label: string;
  userFunc:string
}

export default function Result(props: Props) {
  return (
    <div className="results">
      <div className="result">{props.label}</div>
      <div className="result">{props.userFunc}</div>
      <style jsx={true}>
        {`
          .results {
            width: 100vw;
            height:90px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #000;
            color: #fff;
            text-align: right;
            font-size: 45px;
            vertical-align: middle;
            white-space: nowrap;
            overflow: scroll;
            scroll-snap-type: y mandatory;
          }

          .result{
            scroll-snap-align: center;
            flex:none;
            height: 90px;
          }
        `}
      </style>
    </div>
  );
}
