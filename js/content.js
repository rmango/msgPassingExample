console.log("I'm running");
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });