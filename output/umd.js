(function (factory) {
  typeof define === 'function' && define.amd ? define(['core-js'], factory) :
  factory();
}((function () { 'use strict';

  (async function() {
    await Promise.resolve(console.log('🎉'));
  }());

})));
