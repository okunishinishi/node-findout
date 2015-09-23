findout
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-findout
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-findout
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-findout.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-findout/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-findout
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-findout.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-findout.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-findout
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-findout.svg
[bd_npm_url]: http://www.npmjs.org/package/findout
[bd_npm_shield_url]: http://img.shields.io/npm/v/findout.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/findout.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Find out a module.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install findout --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

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

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.How.md.hbs" Start -->

<a name="section-doc-readme-03-how-md"></a>
How It Works
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

<!-- Section from "doc/readme/03.How.md.hbs" End -->

<!-- Section from "doc/readme/04.Options.md.hbs" Start -->

<a name="section-doc-readme-04-options-md"></a>
Options
-------

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| cwd | string | process.cwd() | Working directory path. |
| safe | boolean | false | No throw when not found. |
<!-- Section from "doc/readme/04.Options.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-findout/blob/master/LICENSE).

<!-- LICENSE End -->


