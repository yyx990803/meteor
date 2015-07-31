Package.describe({
  summary: "Include a standard set of Meteor packages in your app",
  version: '1.2.3-plugins.0'
});

Package.onUse(function(api) {
  // The "imply" here means that if your app uses "meteor-platform", it is
  // treated as if it also directly included all of these packages (and it gets
  // their exports, plugins, etc).
  //
  // If you want, you can "meteor remove meteor-platform" and add some of
  // these back in individually. We haven't tested every subset, though :)

  // These are useful too!  But you don't have to see their exports
  // unless you want to.
  api.use([
    // We can reload the client without messing up methods in flight.
    'reload',
    // And update automatically when new client code is available!
    'autoupdate'
  ], ['client', 'server']);

  api.imply("meteor-base");
  api.imply("mongo");
  api.imply("mobile-experience");
  api.imply("blaze-html-templates");
  api.imply("session");

  // The below are no longer in new Meteor apps by default, but are here for
  // backwards compatibility
  api.imply("check");
});
