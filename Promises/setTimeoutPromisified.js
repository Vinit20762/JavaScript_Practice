function waitFor3Seconds(resolve) {
    setTimeout(resolve, 3000);
  }
  
  function setTimeoutPromisified() {
    return new Promise(waitFor3Seconds);
  }
  
  function main() {
    console.log("Three seconds passed!");
  }
  setTimeoutPromisified().then(main);
  