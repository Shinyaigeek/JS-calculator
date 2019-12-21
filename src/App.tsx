import React, { useState } from "react";
import ReactDOM from "react-dom";

import Result from "./components/Result";
import PageButtons from "./components/PageButtons";

import * as Calclator from "./script/calculator";

export interface ButtonProps {
  label: string;
  func: () => void;
}

function App() {
  const [shownValue, setShownValue] = useState("");

  const PANEL_LABELS: ButtonProps[][][] = [
    [
      [
        {
          label: "C",
          func: () => {
            setShownValue("");
          }
        },
        {
          label: "(",
          func: () => {}
        },
        {
          label: ")",
          func: () => {}
        },
        {
          label: "÷",
          func: () => {
            setShownValue(`${shownValue} ÷ `);
          }
        }
      ],
      [
        {
          label: "7",
          func: () => {
            setShownValue(`${shownValue}7`);
          }
        },
        {
          label: "8",
          func: () => {
            setShownValue(`${shownValue}8`);
          }
        },
        {
          label: "9",
          func: () => {
            setShownValue(`${shownValue}9`);
          }
        },
        {
          label: "×",
          func: () => {
            setShownValue(`${shownValue} × `);
          }
        }
      ],
      [
        {
          label: "4",
          func: () => {
            setShownValue(`${shownValue}4`);
          }
        },
        {
          label: "5",
          func: () => {
            setShownValue(`${shownValue}5`);
          }
        },
        {
          label: "6",
          func: () => {
            setShownValue(`${shownValue}6`);
          }
        },
        {
          label: "-",
          func: () => {
            setShownValue(`${shownValue} - `);
          }
        }
      ],
      [
        {
          label: "1",
          func: () => {
            setShownValue(`${shownValue}1`);
          }
        },
        {
          label: "2",
          func: () => {
            setShownValue(`${shownValue}2`);
          }
        },
        {
          label: "3",
          func: () => {
            setShownValue(`${shownValue}3`);
          }
        },
        {
          label: "+",
          func: () => {
            setShownValue(`${shownValue} + `);
          }
        }
      ],
      [
        {
          label: "0",
          func: () => {
            setShownValue(`${shownValue}0`);
          }
        },
        {
          label: ".",
          func: () => {}
        },
        {
          label: "%",
          func: () => {}
        },
        {
          label: "=",
          func: () => {
            setShownValue(`${Calclator.parseString2Formula(shownValue)}`);
          }
        }
      ]
    ]
  ];

  return (
    <div>
      <Result label={shownValue} />
      <div className="slider">
        {PANEL_LABELS.map(pageprops => {
          return <PageButtons pages={pageprops} />;
        })}
      </div>
      <style jsx>
        {`
          .slider {
            margin-top: 100px;
          }
        `}
      </style>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
