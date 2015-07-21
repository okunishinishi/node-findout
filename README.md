findout
============

Node.js module to find out a module.


<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]

Installation
------------

```bash
$ npm install findout --save
```


Usage
-----

`findout(name)` works like `require()`, but has a lot more locations to search.  

```javascript
var findout = require('findout');

// Resolve a module path.
var pathOfFoo = findout.resolve('foo');

// Find and require a module.
var foo = findout('foo', {
    cwd: __dirname // Lookup from current directory.
});

```

How it works
------------

When you call `findout` for "foo" with '/bar/baz' as current working directory:  

```javascript
findout('foo', {
    cwd: '/bar/baz';
});
```

and it will try the following ways, 

1. `require('foo')`
2. `require('/bar/baz/foo')`
3. `require('/bar/baz/node_modules/foo')`
4. `require('/bar/foo')`
5. `require('/bar/node_modules/foo')`
6. `require('/foo')`
7. `require('/node_modules/foo')`

If it still can't find any, throws an error.




License
-------
This software is released under the [MIT License][my_license_url].



<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-findout/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-findout
[my_travis_url]: http://travis-ci.org/okunishinishi/node-findout
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-findout.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-findout/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-findout
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-findout.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-findout.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-findout/apiguide
[my_lib_apiguide_url]: http://okunishinishi.github.io/node-findout/apiguide/module-findout_lib.html
[my_coverage_url]: http://okunishinishi.github.io/node-findout/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-findout/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/findout
[my_npm_budge_url]: http://img.shields.io/npm/v/findout.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-findout/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-findout.svg?style=flat
