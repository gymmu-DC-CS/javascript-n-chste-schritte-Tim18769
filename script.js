export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
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