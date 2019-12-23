export const add = (left: number, right: number) => {
  return left + right;
};

export const reduce = (right: number, left: number) => {
  return left - right;
};

export const multiplication = (left: number, right: number) => {
  return left * right;
};

export const division = (right: number, left: number) => {
  return left / right;
};

export const makeNumber = (base: number, target: number) => {
  return base * 10 + target;
};

export const arrange2RPN = (base: string[]) => {
  const rpn: string[] = [base[0]];
  for (let i: number = 1; i < base.length; i += 2) {
    rpn.push(base[i + 1]);
    rpn.push(base[i]);
  }
  return rpn;
};

export const parseString2Formula = (base: string) => {
  const stacks: number[] = [];
  let baseRemovedBacket = base.replace(/π/g, Math.PI.toString());
  let isThereGroup = true;
  while (isThereGroup) {
    if (baseRemovedBacket.match(/\([^\(]+?\)/)) {
      baseRemovedBacket = baseRemovedBacket.replace(/\([^\(]+?\)/, tar => {
        if (
          baseRemovedBacket.match(/\([^\(]+?\)/)!.length === 1
        ) {
          return String(parseString2Formula(tar.replace("( ", "").replace(" )", "")));
        }
        return String(parseString2Formula(tar));
      });
    } else {
      isThereGroup = false;
    }
  }
  const doLater: ((left: number, right: number) => number)[] = [];
  const formulaArray = arrange2RPN(baseRemovedBacket.split(" "));
  formulaArray.forEach(part => {
    switch (part) {
      case "+": {
        doLater.push(add);
        break;
      }
      case "-": {
        doLater.push(reduce);
        break;
      }
      case "×": {
        stacks.push(multiplication(stacks.pop()!, stacks.pop()!));
        break;
      }
      case "÷": {
        stacks.push(division(stacks.pop()!, stacks.pop()!));
        break;
      }
      default: {
        if (part.includes("^")) {
          const res = calcPow(part);
          stacks.push(res);
          break
        }
        if (part.includes("sin")) {
          stacks.push(calcSinFromMcLExpansion(Number(part.replace("sin", ""))))
          break
        }
        if (part.includes("cos")) {
          stacks.push(calcCosFromMcLExpansion(Number(part.replace("cos", ""))))
          break
        }
        if (part.includes("tan")) {
          stacks.push(calcTan(Number(part.replace("tan", ""))));
        }
        stacks.push(Number(part));
        break;
      }
    }
  });
  doLater.reverse().forEach(func => {
    stacks.push(func(stacks.pop()!, stacks.pop()!));
  });
  return stacks[0];
};

export const pow = (left: number, right: number) => {
  let res = 1;
  for (let i = 0; i < right; i++) {
    res *= left;
  }
  return res;
};

export const calcPow = (base: string) => {
  const powed = base.split("^").map(Number);
  powed.reverse();
  while (powed.length > 1) {
    powed.push(pow(powed.pop()!, powed.pop()!));
  }
  return powed[0];
};

export const calcFactorial = (base: string) => {
  let res = 1;
  for (let i = 1; i <= Number(base.replace("!", "")); i++) {
    res *= i
  }
  return res
}

export const calcSinFromMcLExpansion = (x: number) => {
  let res = x;
  let preres = 0;
  for (let i = 3; i < 100; i += 2) {
    preres = res;
    res += calcPow(`-1^${(i - 1) / 2}`) * calcPow(`${x}^${i}`) / calcFactorial(`${i}!`)
    if (res.toString().includes("e") || res === 0) break
  }
  return Math.round(preres * 1000) / 1000
}

export const calcCosFromMcLExpansion = (x: number) => {
  let res = 1;
  let preres = 0;
  for (let i = 2; i < 100; i += 2) {
    preres = res;
    res += calcPow(`-1^${i / 2}`) * calcPow(`${x}^${i}`) / calcFactorial(`${i}!`)
    if (res.toString().includes("e") || res === 0) break
  }
  return Math.round(preres * 1000) / 1000
}

export const calcTan = (x: number) => {
  return calcSinFromMcLExpansion(x) / calcCosFromMcLExpansion(x)
}

export const defineUserFunction = (base: string) => { };
