'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;
exports['default'] = fluxMixin;
/**
 * fluxMixin
 *
 * Exports a function that creates a React component mixin. Implements methods
 * from reactComponentMethods.
 *
 * Any arguments passed to the mixin creator are passed to `connectToStores()`
 * and used as the return value of `getInitialState()`. This lets you handle
 * all of the state initialization and updates in a single place, while removing
 * the burden of manually adding and removing store listeners.
 *
 * @example
 * let Component = React.createClass({
 *   mixins: [fluxMixin({
 *     storeA: store => ({
 *       foo: store.state.a,
 *     }),
 *     storeB: store => ({
 *       bar: store.state.b,
 *     })
 *   }]
 * });
 */

var _PropTypes = require('react');

var _Flux = require('../Flux');

var _instanceMethods$staticProperties = require('./reactComponentMethods');

var _assign = require('object-assign');

var _assign2 = _interopRequireDefault(_assign);

function fluxMixin() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  function getInitialState() {
    this.initialize();
    return this.connectToStores.apply(this, args);
  }

  return _assign2['default']({ getInitialState: getInitialState }, _instanceMethods$staticProperties.instanceMethods, _instanceMethods$staticProperties.staticProperties);
}

;
module.exports = exports['default'];