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
  api.imply([
    // It's Log! It's better than bad, it's good!
    'logging',
    // The easiest way to get a little reactivity into your app.
    'session',
    // Blaze: Reactive DOM!
    'blaze',
    'ui', // XXX COMPAT WITH PACKAGES BUILT FOR 0.9.0.
    // A great template language!
    'spacebars',
    // Turn templates into views!
    'templating',
    // Easy type assertions? check.
    'check',
    // Life isn't always predictable.
    'random',
    // People like being able to clone objects.
    'ejson'
  ]);

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
});
