# [lil](http://lil-js.github.io)'-type [![Build Status](https://api.travis-ci.org/lil-js/type.svg?branch=master)][travis]

Full featured, reliable, type checking module

<table>
<tr>
<td><b>Name</b></td><td>type</td>
</tr>
<tr>
<td><b>Version</b></td><td>0.1.0</td>
</tr>
<tr>
<td><b>Size</b></td><td>2 KB / 1 KB (gzipped)</td>
</tr>
</table>

## Features

- Full type checking support

## Installation

Via [Bower](http://bower.io)
```bash
bower install lil-type
```
Via [Component](http://component.io/)
```bash
component install lil-js/type
```

Or loading the script remotely
```html
<script src="//cdn.rawgit.com/lil-js/type/0.1.0/type.js"></script>
```

### Environments

Cross-browser support guaranteed running tests in [BrowserStack](http://browserstack.com/)

- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage

```js
lil.is('name') // -> 'string'
lil.isArray([1,2,3]) // -> true
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
