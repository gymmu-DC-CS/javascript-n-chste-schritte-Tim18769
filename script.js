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