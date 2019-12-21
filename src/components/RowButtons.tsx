import React from "react";
import { Fab } from "@material-ui/core";
import { ButtonProps } from "../App";

import Style from "styled-jsx";

interface Props {
  buttons: ButtonProps[];
}

export default function RowButtons(props: Props) {
  return (
    <div className="buttons--column">
      {props.buttons.map(prop => {
        return (
          <Fab
            color="primary"
            onClick={() => prop.func()}
            style={{
              width: "80px",
              height: "80px",
              margin: "auto"
            }}
            disabled={prop.disabled}
          >
            {prop.label}
          </Fab>
        );
      })}
      <style jsx>
        {`
          .buttons--column {
            width: 100%;
            display: flex;
            margin: calc(4vh - 9px - 3px) 0;
            height: 80px;
          }
        `}
      </style>
    </div>
  );
}
