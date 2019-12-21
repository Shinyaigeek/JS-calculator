import React from "react";
import { ButtonProps } from "../App";

import RowButtons from "./RowButtons";

import Style from "styled-jsx";

interface Props {
  pages: ButtonProps[][];
}

export default function PageButtons(props: Props) {
  return (
    <div className="buttons--page">
      {props.pages.map(pagesprops => {
        return <RowButtons buttons={pagesprops} />;
      })}
      <style jsx>
          {
              `.buttons--page{
                  width:96vw;
                  max-width:400px;
                  height:calc(100vh - 90px - 42px)
              }
              `
          }
      </style>
    </div>
  );
}
