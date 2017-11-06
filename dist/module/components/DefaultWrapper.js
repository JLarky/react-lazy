'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DefaultWrapper(_ref) {
    var childProps = _ref.childProps,
        children = _ref.children,
        isFailed = _ref.isFailed,
        isLoaded = _ref.isLoaded,
        props = _objectWithoutProperties(_ref, ['childProps', 'children', 'isFailed', 'isLoaded']);

    var className = 'react-lazy-wrapper' + (!isLoaded && !isFailed ? ' react-lazy-wrapper--' + (childProps ? 'loading' : 'placeholder') : '') + (isFailed ? ' react-lazy-wrapper--failed' : '') + (isLoaded ? ' react-lazy-wrapper--loaded' : '') + (props.className ? ' ' + props.className : '');

    return _react2.default.createElement(
        'div',
        _extends({}, props, { className: className }),
        children
    );
}

DefaultWrapper.propTypes = {
    children: _propTypes2.default.node,
    childProps: _propTypes2.default.object,
    className: _propTypes2.default.string,
    isFailed: _propTypes2.default.bool,
    isLoaded: _propTypes2.default.bool
};

exports.default = DefaultWrapper;