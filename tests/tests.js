// module("Basic tests", {
//   setup: function() {
//   },
//   teardown: function() {
//   }
// });

// function createEventArray() {
//   return ["_trackEvent", window.location.hostname];
// }

// function createPageviewArray() {
//   return ["_trackPageview", "/virtual/simple"];
// }

test("A test is run", function() {
  deepEqual(1, 1);
});


// test("A test is run", function() {
//   var eventArray = createEventArray(),
//       eventName = "Simple";

//   analytics.event(eventName);

//   eventArray.push(eventName);
//   deepEqual(_gaq, [eventArray]);
// });
