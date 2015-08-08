var findout = require('findout');

// Resolve a module path.
var pathOfFoo = findout.resolve('foo');

// Find and require a module.
var foo = findout('foo', {
    cwd: __dirname // Lookup from current directory.
});
