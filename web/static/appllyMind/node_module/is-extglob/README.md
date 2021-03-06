# is-extglob [![NPM version](https://badge.fury.io/js/is-extglob.svg)](http://badge.fury.io/js/is-extglob)  [![Build Status](https://travis-ci.org/jonschlinkert/is-extglob.svg)](https://travis-ci.org/jonschlinkert/is-extglob) 

> Returns true if a string has an extglob.

## Install with [npm](npmjs.org)

```bash
npm i is-extglob --save
```

## Usage

```js
var isExtglob = require('is-extglob');
```

**True**

```js
isExtglob('?(abc)');
isExtglob('@(abc)');
isExtglob('!(abc)');
isExtglob('*(abc)');
isExtglob('+(abc)');
```

**False**

Everything else...

```js
isExtglob('foo.js');
isExtglob('!foo.js');
isExtglob('*.js');
isExtglob('**/abc.js');
isExtglob('abc/*.js');
isExtglob('abc/(aaa|bbb).js');
isExtglob('abc/[a-z].js');
isExtglob('abc/{a,b}.js');
isExtglob('abc/?.js');
isExtglob('abc.js');
isExtglob('abc/def/ghi.js');
```

## Related
* [extglob](https://github.com/jonschlinkert/extglob): Extended globs. extglobs add the expressive power of regular expressions to glob patterns.
* [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A faster alternative to minimatch (10-45x faster on avg), with all the features you're used to using in your Grunt and gulp tasks.
* [parse-glob](https://github.com/jonschlinkert/parse-glob): Parse a glob pattern into an object of tokens.

## Run tests
Install dev dependencies.

```bash
npm i -d && npm test
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-extglob/issues)


## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 06, 2015._