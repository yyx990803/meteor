Package.describe({
  name: "promise",
  version: "0.0.1",
  summary: "ES6 Promise polyfill with Fiber support",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.addFiles("promise_client.js", "client", { bare: true });
  api.addFiles("promise_server.js", "server");
  api.export("Promise");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("promise");
  api.addFiles("promise-tests.js");
});
