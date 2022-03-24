function analyzeArray(arr) {
  return {
    average:
      arr.reduce((previous, current) => (current += previous)) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = analyzeArray;
