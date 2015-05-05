This package uses the meteor-promise NPM package to provide a lightweight
`Promise` polyfill on both client and server.

On the server, `Promise` is augmented with methods `.await`, `.awaitAll`,
and `.async` to support ES7-style async functions and await expressions
using Fibers.

On the client, the interface of `Promise` is identical to what is provided
by https://www.npmjs.com/package/promise (ES6 plus a few other methods,
like .done).

Note that promise_client.js is a symlink to a webpack-generated file in
the dev bundle.
