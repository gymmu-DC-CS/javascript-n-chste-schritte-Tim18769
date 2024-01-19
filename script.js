export function aufgabe01(args) {
  return args.replace(/e/g, '');
}

export function aufgabe04(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " && input[i-1] != "-"){
      result++
    }
    
}
  return result + 1
}

export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}

export function aufgabe07(args) {
  const input = args
  if (
    (input.indexOf(" und ") !=-1 && input.indexOf("Und") != 0) ||
    input.indexOf("Und") === 0 ||
    input === "und"
  )
  return true
  else return false
}

export function aufgabe08(args) {
  const input = args;

  var textMit3 = input.replace(/[e]/g, '3');

  return textMit3;
}

export function aufgabe09(args) {
  const input = args;

  if (input.length === 6) {
    return true;
  } else {
    return false; 
  }
}

export function aufgabe10(args) {
  const input = args; 
  const farbenUndSo = /^#[0-9A-Fa-f]{6}$/;
  return farbenUndSo.test(input);
}

export function aufgabe11(args) {
  const input = args;

  if (input.length === 1) {
      return input.charCodeAt(0);
  } else {
      return "null"
  }
}

export function aufgabe12(args) {
  const input = args.indexOf('e');
  return input !== -1 ? input : "-1";
}

export function aufgabe13(args) {
  const input = args.lastIndexOf('e');
    return input !== -1 ? input : "-1";
}

export function aufgabe14(args) {
  const firstE = args.indexOf('e');
  const secondE = args.indexOf('e', firstE + 1);
  const thirdE = args.indexOf('e', secondE + 1);

  return thirdE !== -1 ? thirdE : "-1";
}

export function aufgabe15(args) {
  const indexOfSpace = args.indexOf(' ');

  return indexOfSpace !== -1 ? args.slice(0, indexOfSpace) : args;
}

export function aufgabe16(args) {
  const indexOfDollar = args.indexOf('$');
  if (indexOfDollar !== -1) {
    const firstPart = args.slice(0, indexOfDollar);
    const secondPart = args.slice(indexOfDollar + 1);
    return [firstPart, secondPart];
  } else {
    return [args, ''];
  } 
}

//Geht noch nicht//
export function aufgabe17(args) {
  const list = args.split(',');
  return list.map(entry => entry.trim());
}

export function aufgabe19(args) {
  return args.split('').map(char => char + char).join('');
}

export function aufgabe20(args) {
  const dotWithSpace = '. ';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '.') {
      if (args[i + 1] !== ' ' && args.substring(i + 1, i + 2) !== dotWithSpace) {
        return false;
      }
    }
  }
  return true;
}

export function aufgabe21(args) {
  return args.split('').reverse().join('');
}

export function aufgabe22(args) {
  const indexOfK = args.indexOf('k');
    if (indexOfK !== -1) {
        const prefix = args.substring(0, indexOfK);
        const replacement = '_'.repeat(prefix.length);
        return replacement + args.substring(indexOfK);
    } else {
        return args;
    }
}

export function aufgabe23(args) {
  if (args.length === 0) {
    return "Die Eingabe ist leer.";
  }

  const firstChar = args[0];
  return firstChar + args + firstChar;
}

export function aufgabe24(args) {
  if (args.length < 2) {
    return args
  }

  const firstChar = args[0];
  const lastChar = args[args.length - 1];

  return lastChar + args.slice(1, -1) + firstChar;
}

export function aufgabe25(args) {
  const length = args.length;

    if (length % 2 === 0) {
        const middle1 = length / 2 - 1;
        const middle2 = length / 2;
        return args.slice(0, middle1) + args.slice(middle2 + 1);
    } else {
        const middle = Math.floor(length / 2);
        return args.slice(0, middle) + args.slice(middle + 1);
    }
}

export function aufgabe26(args) {
  if (args.length >= 2) {
    const firstTwoChars = args.substring(0, 2);
    const sortedChars = firstTwoChars.split('').sort().join('');
    return sortedChars + args.substring(2);
} else {
    return "Sie müssen mindestens zwei Zeichen schreiben.";
}
}

export function aufgabe27(args) {
  const mathSymbolsRegex = /^-?\d*\.?\d+$/;
    const specialNumbers = ['pi', 'π', 'e', 'phi', 'φ', 'sqrt2', '√2', 'sqrt3', '√3', 'gamma', 'γ', 'ln2', 'log2e', 'ln10', 'log10e']; //<--- Habe ich einfach noch hinzugefügt, da Zeichen oder auch gewisse Buchstaben auch Zahlen sein können, wie zB Pi (3.1...)

    const sanitizedInput = args.trim().toLowerCase();

    return mathSymbolsRegex.test(args) || specialNumbers.includes(sanitizedInput);
}

export function aufgabe28(args) {
  const numbers = args.split(' ').map(Number);

    if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
        const sum = numbers[0] + numbers[1];
        return sum;
    } else {
        return "Error";
    }
}

export function aufgabe02(args) {
  return args.toUpperCase()
}

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
    result++
    }
  }
  return result
}

export function aufgabe06(args) {
  const input = args
  if (input === "") {
    return false
  }
  for ( let i =0; i < input.length; i++) {
    const currentElement = input [i]. toLowerCase()
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32 ){
        return true 
      }
    }
  } 

  return false 
}

export function aufgabe18(args) {
  const name = args.name;
  const alter = args.alter;
    
  return `Sie heissen ${name} und sind ${alter} Jahre alt.`;
}
