// error = an object that is created to represent a problem

// try{}
// catch{}
// finally{} = (optional)

try {
  console.log(x);
  // network errors
  // promise rejection
  // security errors
} catch (error) {
  console.log(error);
} finally {
  // close files
  // close connections
  // release resources
  console.log("Here is always executed");
}

console.log("Here is the end");

try {
  const dividend = window.prompt("請輸入被除數");
  const divisor = window.prompt("請輸入除數");

  if (divisor == 0) {
    throw new Error("除數不能為0");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("請輸入數字");
  }

  const reult = dividend / divisor;
  console.log(result);
} catch (error) {
  console.log(error);
}
