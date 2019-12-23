import React, { useEffect } from "react";
import { ButtonProps } from "../App";

import RowButtons from "./RowButtons";

import Style from "styled-jsx";

interface Props {
  pages: ButtonProps[][];
}

export default function PageButtons(props: Props) {
  return (
    <div className="buttons--page">
      {props.pages.map((pagesprops, index) => {
        return (
          <React.Fragment>
            <RowButtons buttons={pagesprops} key={`row-button__${index}`} />
            <style jsx={true}>
              {`
                .buttons--page {
                  width: 100vw;
                  margin: 12px 0;
                  height: calc(100vh - 90px - 42px);
                  scroll-snap-align: center;
                  flex:none;
                }
              `}
            </style>
          </React.Fragment>
        );
      })}
    </div>
  );
}
