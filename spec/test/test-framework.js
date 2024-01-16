export const assertEquals = (actualValue, expectedValue) => {
  if (actualValue !== expectedValue) throw new Error(`Expected: ${expectedValue} \n\tReceived: ${actualValue}`);
  return true;
}

export const test = (str, testFunc) => {
  try {
      testFunc();
      console.log("\x1b[33m%s\x1b[32m%s\x1b[0m", "\t✔ ", str);
  }
  catch (err) {
      console.log("\x1b[33m%s\x1b[31m%s\x1b[0m", "\t✗ ", str);
      console.error(`\t${err.message}`);
  }
}