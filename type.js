/*! lil-type - v0.1 - MIT License - https://github.com/lil-js/type */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports === 'object') {
    factory(exports)
    if (typeof module === 'object' && module !== null) {
      module.exports = exports
    }
  } else {
    factory((root.lil = root.lil || {}))
  }
}(this, function (exports) {
  var VERSION = '0.1.0'
  var toStr = Object.prototype.toString
  var slice = Array.prototype.slice

  exports.type = { VERSION: VERSION }

  exports.isObject = function isObject(o) {
    return o && toStr.call(o) === '[object Object]'
  }

  exports.isArray = function isArray(o) {
    return o && toStr.call(o) === '[object Array]'
  }

  exports.isFn = function isFn(fn) {
    return typeof fn === 'function'
  }

  exports.isDate = function isDate(o) {
    return o && toStr.call(o) === '[object Date]'
  }
}))
