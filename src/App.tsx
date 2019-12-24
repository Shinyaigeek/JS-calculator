import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Result from "./components/Result";
import PageButtons from "./components/PageButtons";

import * as Calclator from "./script/calculator";

export interface ButtonProps {
  label: string;
  func: () => void;
  disabled?: boolean;
}

function App() {
  const [shownValue, setShownValue] = useState("");
  const [userFunc, setUserFunc] = useState("f(x) = ");
  const [settingUserFunc, setSettingUserFunc] = useState(false);

  const PANEL_LABELS: ButtonProps[][][] = [
    [
      [
        {
          label: "set f(x)",
          func: () => {
            setSettingUserFunc(true);
            setUserFunc("f(x) = ");
          }
        },
        {
          label: "x",
          func: () => {
            setUserFunc(`${userFunc}x`);
          },
          disabled: !settingUserFunc
        },
        {
          label: "a^b",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}^`);
            } else {
              setShownValue(`${shownValue}^`);
            }
          }
        }
      ],
      [
        {
          label: "sin(x)",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}sin( `);
            } else {
              setShownValue(`${shownValue}sin( `);
            }
          }
        },
        {
          label: "cos(x)",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}cos( `);
            } else {
              setShownValue(`${shownValue}cos( `);
            }
          }
        },
        {
          label: "tan(x)",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}tan( `);
            } else {
              setShownValue(`${shownValue}tan( `);
            }
          }
        },
        {
          label: "π",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}π`);
            } else {
              setShownValue(`${shownValue}π`);
            }
          }
        }
      ]
    ],
    [
      [
        {
          label: "C",
          func: () => {
            setShownValue("");
            setUserFunc("");
          }
        },
        {
          label: "(",
          func: () => {
            if (settingUserFunc) {
              userFunc.length === 0 || userFunc[userFunc.length - 1] === " "
                ? setUserFunc(`${userFunc}( `)
                : setUserFunc(`${userFunc} ( `);
            } else {
              shownValue.length === 0 ||
              shownValue[shownValue.length - 1] === " "
                ? setShownValue(`${shownValue}( `)
                : setShownValue(`${shownValue} ( `);
            }
          },
          disabled:
            shownValue.length > 0 &&
            !Number.isNaN(
              Number(
                shownValue
                  .trim()
                  .split("")
                  .pop()
              )
            )
        },
        {
          label: ")",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc} )`);
            } else {
              setShownValue(`${shownValue} )`);
            }
          },
          disabled:
            Number.isNaN(Number(shownValue.split("").pop())) ||
            (shownValue.match(/\(/g)?.length ?? Infinity) <=
              (shownValue.match(/\)/g)?.length ?? 0)
        },
        {
          label: "÷",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc} ÷ `);
            } else {
              setShownValue(`${shownValue} ÷ `);
            }
          }
        }
      ],
      [
        {
          label: "7",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}7`);
            } else {
              setShownValue(`${shownValue}7`);
            }
          }
        },
        {
          label: "8",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}8`);
            } else {
              setShownValue(`${shownValue}8`);
            }
          }
        },
        {
          label: "9",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}9`);
            } else {
              setShownValue(`${shownValue}9`);
            }
          }
        },
        {
          label: "×",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc} × `);
            } else {
              setShownValue(`${shownValue} × `);
            }
          }
        }
      ],
      [
        {
          label: "4",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}4`);
            } else {
              setShownValue(`${shownValue}4`);
            }
          }
        },
        {
          label: "5",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}5`);
            } else {
              setShownValue(`${shownValue}5`);
            }
          }
        },
        {
          label: "6",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}6`);
            } else {
              setShownValue(`${shownValue}6`);
            }
          }
        },
        {
          label: "-",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc} - `);
            } else {
              setShownValue(`${shownValue} - `);
            }
          }
        }
      ],
      [
        {
          label: "1",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}1`);
            } else {
              setShownValue(`${shownValue}1`);
            }
          }
        },
        {
          label: "2",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}2`);
            } else {
              setShownValue(`${shownValue}2`);
            }
          }
        },
        {
          label: "3",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}3`);
            } else {
              setShownValue(`${shownValue}3`);
            }
          }
        },
        {
          label: "+",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc} + `);
            } else {
              setShownValue(`${shownValue} + `);
            }
          }
        }
      ],
      [
        {
          label: "0",
          func: () => {
            if (settingUserFunc) {
              setUserFunc(`${userFunc}0`);
            } else {
              setShownValue(`${shownValue}0`);
            }
          }
        },
        {
          label: ".",
          func: () => {}
        },
        {
          label: "±",
          func: () => {}
        },
        {
          label: "=",
          func: () => {
            setShownValue(`${Calclator.parseString2Formula(shownValue)}`);
          }
        }
      ]
    ],
    [
      [
        {
          label: "test",
          func: () => null
        }
      ]
    ]
  ];

  return (
    <div>
      <Result label={shownValue} userFunc={userFunc} />
      <div className="slider">
        {PANEL_LABELS.map((pageprops, index) => {
          return (
            <PageButtons pages={pageprops} key={`page--button__${index}`} />
          );
        })}
      </div>
      <style jsx={true}>
        {`
          .slider {
            margin-top: 100px;
            overflow: auto;
            display: flex;
            scroll-snap-type: x mandatory;
          }
        `}
      </style>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

if ("serviceWorker" in navigator) {
  console.log("[ServiceWorker] you can add pwa");
  navigator.serviceWorker.register("/serviceworker.js").then(
    function(registration) {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    function(err) {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );
}
