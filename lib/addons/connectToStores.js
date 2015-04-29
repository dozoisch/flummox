'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
/**
 * Higher-order component form of connectToStores
 */

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _instanceMethods$staticProperties = require('./reactComponentMethods');

var _assign = require('object-assign');

var _assign2 = _interopRequireDefault(_assign);

exports['default'] = function (BaseComponent, stores, stateGetter) {
  var ConnectedComponent = (function (_React$Component) {
    var _class = function ConnectedComponent(props, context) {
      _classCallCheck(this, _class);

      _React$Component.call(this, props, context);

      this.initialize();

      this.state = this.connectToStores(stores, stateGetter);
    };

    _inherits(_class, _React$Component);

    _class.prototype.render = function render() {
      return _React2['default'].createElement(BaseComponent, _extends({}, this.state, this.props));
    };

    return _class;
  })(_React2['default'].Component);

  _assign2['default'](ConnectedComponent.prototype, _instanceMethods$staticProperties.instanceMethods);

  _assign2['default'](ConnectedComponent, _instanceMethods$staticProperties.staticProperties);

  return ConnectedComponent;
};

module.exports = exports['default'];