'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Errcode = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
 * It is fail!
 *
 */
var Errcode1 = function (_Error) {
    (0, _inherits3.default)(Errcode1, _Error);

    function Errcode1(message) {
        var errcode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ERR_UNKNOWN;
        (0, _classCallCheck3.default)(this, Errcode1);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Errcode1.__proto__ || (0, _getPrototypeOf2.default)(Errcode1)).call(this, message));

        _this.name = _this.constructor.name;
        _this.message = message;
        _this.errcode = errcode;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, _this.constructor);
        } else {
            _this.stack = new Error(message).stack;
        }
        return _this;
    }

    (0, _createClass3.default)(Errcode1, [{
        key: 'toJSON',
        value: function toJSON() {
            return { errcode: this.errcode, msg: this.message };
        }
    }]);
    return Errcode1;
}(Error);

Errcode1.ERR_UNKNOWN = 40001;
Errcode1.ERR_CODE1 = 40002;
Errcode1.ERR_PARAM_ERROR = 40003;
Errcode1.ERR_NO_SUCH_ENTITY = 40004;
Errcode1.ERR_ALREADY_EXIST = 40005;
Errcode1.ERR_USER_NO_BASEINFO = 40006;
Errcode1.ERR_USER_DUP_LOGIN = 40007;
Errcode1.ERR_USER_DUP_EMAIL = 40008;
Errcode1.ERR_USER_CREATE_FAIL = 40009;
Errcode1.ERR_USER_UPDATE_FAIL = 40010;
exports.default = Errcode1;

var Errcode = exports.Errcode = function (_Errcode) {
    (0, _inherits3.default)(Errcode, _Errcode);

    function Errcode() {
        (0, _classCallCheck3.default)(this, Errcode);
        return (0, _possibleConstructorReturn3.default)(this, (Errcode.__proto__ || (0, _getPrototypeOf2.default)(Errcode)).apply(this, arguments));
    }

    return Errcode;
}(Errcode1);

/*
export const ERR_UNKNOWN = 40001;
export const ERR_CODE1 = 40002;
export const ERR_PARAM_ERROR = 40003;
export const ERR_NO_SUCH_ENTITY = 40004;
export const ERR_ALREADY_EXIST = 40005;
*/
/*
// now I can extend
class MyError extends Errcode {}

//var myerror = new MyError("ll");
var myerror = new Errcode("ll");
console.log(myerror.message);
console.log(myerror.errcode);
console.log(myerror instanceof Error);
console.log(myerror.name);
console.log(myerror.stack);
*/