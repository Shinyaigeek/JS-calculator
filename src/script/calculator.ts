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
  const rpn: (number | string)[] = [Number(base[0])];
  for (let i: number = 1; i < base.length; i += 2) {
    rpn.push(Number(base[i + 1]));
    rpn.push(base[i]);
  }
  return rpn;
};

export const parseString2Formula = (base: string) => {
  const stacks: number[] = [];
  const doLater: ((left: number, right: number) => number)[] = [];
  const formulaArray = arrange2RPN(base.split(" "));
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

class VirtualCalculator {
  constructor() {}
}

class Group {
  left: number | Group;
  right: number | Group;
  constructor(left: number | Group, right: number | Group) {
    this.left = left;
    this.right = right;
  }

  reduce() {}
}

export class Formula {
  constructor(formula: Add | Division | Minus | Multiple | Formula | number) {}
}

export class Division extends Group {
  constructor(left: number | Group, right: number | Group) {
    super(left, right);
    this.left = left;
    this.right = right;
  }
  reduce() {
    const divisionLeft =
      typeof this.left === "number" ? this.left : this.left.reduce();
    const divisionRight =
      typeof this.right === "number" ? this.right : this.right.reduce();
    if (!divisionLeft || !divisionRight) {
      throw new Error("Division miss");
    }
    return divisionLeft / divisionRight;
  }
}

export class Multiple extends Group {
  constructor(left: number | Group, right: number | Group) {
    super(left, right);
    this.left = left;
    this.right = right;
  }
  reduce() {
    const multipleLeft =
      typeof this.left === "number" ? this.left : this.left.reduce();
    const multipleRight =
      typeof this.right === "number" ? this.right : this.right.reduce();
    if (!multipleLeft || !multipleRight) {
      throw new Error("Multiple miss");
    }
    return multipleLeft * multipleRight;
  }
}

export class Add extends Group {
  constructor(left: number | Group, right: number | Group) {
    super(left, right);
    this.left = left;
    this.right = right;
  }
  reduce() {
    const plusLeft =
      typeof this.left === "number" ? this.left : this.left.reduce();
    const plusRight =
      typeof this.right === "number" ? this.right : this.right.reduce();
    if (!plusLeft || !plusRight) {
      throw new Error("Add miss");
    }
    return plusLeft + plusRight;
  }
}

export class Minus extends Group {
  constructor(left: number | Group, right: number | Group) {
    super(left, right);
    this.left = left;
    this.right = right;
  }
  reduce() {
    const minusLeft =
      typeof this.left === "number" ? this.left : this.left.reduce();
    const minusRight =
      typeof this.right === "number" ? this.right : this.right.reduce();
    if (!minusLeft || !minusRight) {
      throw new Error("Minus miss");
    }
    return minusLeft - minusRight;
  }
}
