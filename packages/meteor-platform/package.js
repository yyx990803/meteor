Package.describe({
  summary: "Include a standard set of Meteor packages in your app",
  version: '1.2.3-plugins.0'
});

Package.onUse(function(api) {
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
