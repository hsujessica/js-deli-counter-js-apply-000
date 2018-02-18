var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing() {
  if (katzDeliLine.length != 0) {
    return "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return "There is nobody waiting to be served!";
}

function currentLine() {
  if (katzDeliLine.length != 0) {
    var line = "The line is currently: ";
    for (let i = 0; i<katzDeliLine.length; i++) {
      line += Number.toString(i + 1) + ". " + katzDeliLine[i];
      if (i < katzDeliLine.length - 1) {
        line += ",";
      }
    }
    return line;
  }
  return "The line is currently empty."
}
