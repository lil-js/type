/*! lil-type - v0.1 - MIT License - https://github.com/lil-js/type */
(function (global) {
  var VERSION = '0.1.0'
  var lil = global.lil || {}
  var toStr = Object.prototype.toString
  var slice = Array.prototype.slice

  function isObject(o) {
    return o && toStr.call(o) === '[object Object]'
  }

  function isArray(o) {
    return o && toStr.call(o) === '[object Array]'
  }

  function type(config, data, cb) {
    return requestFactory('GET').apply(null, arguments)
  }

  type.VERSION = VERSION

  lil.type = type
  if (typeof define === 'function' && define.amd) {
    define(function () { return type })
  } else {
    global.lil = lil
  }
}(this))
