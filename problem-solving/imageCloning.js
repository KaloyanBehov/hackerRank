"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
  inputString += chunk;
});
process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}
class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  // Add methods here
  url;
  height;
  width;
  constructor(url, size) {
    this.url = url;
    this.height = size.height;
    this.width = size.width;
    console.log(size);
  }
  getUrl() {
    return this.url;
  }
  setUrl(url) {
    this.url = url;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
  }
  getSize() {
    return new Size(this.width, this.height);
  }
  cloneImage() {
    return new Image(this.url, new Size(this.width, this.height));
  }
}
