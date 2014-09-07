# [lil](http://lil-js.github.io)'-type [![Build Status](https://api.travis-ci.org/lil-js/type.svg?branch=master)][travis]

<img align="center" height="150" src="http://lil-js.github.io/img/liljs-logo.png" />

Reliable, full featured, type checking helpers

<table>
<tr>
<td><b>Name</b></td><td>type</td>
</tr>
<tr>
<td><b>Version</b></td><td>0.1.0</td>
</tr>
<tr>
<td><b>Size</b></td><td>2 KB / >1 KB (gzipped)</td>
</tr>
<tr>
<td><b>Environment</b></td><td>Node, Browser</td>
</tr>
</table>

## Installation

#### Node.js
```bash
npm install lil-type
```

#### Browser
Via [Bower](http://bower.io)
```bash
bower install lil-type
```
Via [Component](https://github.com/componentjs/component)
```bash
component install lil-js/type
```
Or loading the script remotely
```html
<script src="//cdn.rawgit.com/lil-js/type/0.1.0/type.js"></script>
```

### Environments

- Node.js
- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage


You could fetch de module via `require()` if it's available.
Otherwise, global fallback will be used, exposed via `lil.type`
```js
var type = require('lil-type')
```

##### Type checking
```js

lil.is('name') // -> 'string'
lil.isArray([1,2,3]) // -> true
```

##### Get type
```js
lil.is('name') // -> 'string'
lil.is({}) // -> 'object'
lil.is([1]) // -> 'array'
lil.is(/[a-z]/) // -> 'regexp'
lil.is(function () {}) // -> 'function'
lil.is(void 0) // -> 'undefined'
```

## API

#### type.VERSION

## Contributing

Wanna help? Cool! It will be appreciated :)

You must add new test cases for any new feature or refactor you do,
always following the same design/code patterns that already exist

### Development

Only [node.js](http://nodejs.org) is required for development

Clone the repository
```bash
$ git clone https://github.com/lil-js/type.git && cd type
```

Install dependencies
```bash
$ npm install
```

Generate browser bundle source
```bash
$ make browser
```

Run tests
```bash
$ make test
```

## License

[MIT](http://opensource.org/licenses/MIT) © Tomas Aparicio

[travis]: http://travis-ci.org/lil-js/type
