(function (exports, require, module, __filename, __dirname) {
    console.log(__dirname);
    console.log(__filename);
  var url = "https://example.com/api/notes";
  function log(message) {
    console.log(message);
  }
  const logging = log;
  // Removed export statement from inside IIFE
})();

export function log(message) { return console.log(message); }
