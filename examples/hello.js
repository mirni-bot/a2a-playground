// PLAYGROUND_MARKER — sample JavaScript file for the A2A playground.

function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof module !== "undefined") {
  module.exports = { greet };
} else {
  console.log(greet("world"));
}
