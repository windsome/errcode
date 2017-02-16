'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

exports.default = Errcode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Errcode(message) {
    var _this = this;

    var errcode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    this.name = 'Errcode';
    this.message = message || '';
    this.errcode = errcode;
    this.stack = new Error().stack;
    this.toJSON = function () {
        return { errcode: _this.errcode, msg: _this.message };
    };
}
Errcode.prototype = (0, _create2.default)(Error.prototype);
Errcode.prototype.constructor = Errcode;