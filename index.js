var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine = katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing() {
  if (katzDeliLine.length = 0) {
    return "There is nobody waiting to be served!";
  }
  return katzDeliLine[0];
  katzDeliLine = katzDeliLine.shift();
}

function currentLine() {
  if (katzDeliLine.length = 0) {
    return "The line is currently empty."
  }
  var line = "The line is currently: ";
  for (let i = 0; i<katzDeliLine.length; i++) {
    line += Number.toString(i + 1) + ". " + katzDeliLine[i];
    if (i < katzDeliLine.length - 1) {
      line += ",";
    }
  }
  return line;
}
