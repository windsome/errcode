'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ERR_UPLOAD_USER_ABORT = exports.ERR_UPLOAD_FAIL = exports.ERR_FILE_READ_FAIL = exports.ERR_POST_MISS_REQUIRE = exports.ERR_POST_TYPE_CHANGE_NOT_ALLOW = exports.ERR_TAXONOMY_DUP_TERM = exports.ERR_USER_UPD_NO_USER = exports.ERR_USER_UPDATE_FAIL = exports.ERR_USER_CREATE_FAIL = exports.ERR_USER_DUP_EMAIL = exports.ERR_USER_DUP_LOGIN = exports.ERR_USER_NO_BASEINFO = exports.ERR_MISS_REQUIRE = exports.ERR_ALREADY_EXIST = exports.ERR_UPDATE_DB_FAIL = exports.ERR_INSERT_DB_FAIL = exports.ERR_NO_SUCH_ENTITY = exports.ERR_PARAM_ERROR = exports.ERR_CODE1 = exports.ERR_UNKNOWN = undefined;

var _errcode = require('errcode');

var _errcode2 = _interopRequireDefault(_errcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *
 * create your own Errcode file. Errcode.js:
 */
var ERR_UNKNOWN = exports.ERR_UNKNOWN = 40001;
var ERR_CODE1 = exports.ERR_CODE1 = 40002;
var ERR_PARAM_ERROR = exports.ERR_PARAM_ERROR = 40003;
var ERR_NO_SUCH_ENTITY = exports.ERR_NO_SUCH_ENTITY = 40004;
var ERR_INSERT_DB_FAIL = exports.ERR_INSERT_DB_FAIL = 40005;
var ERR_UPDATE_DB_FAIL = exports.ERR_UPDATE_DB_FAIL = 40006;
var ERR_ALREADY_EXIST = exports.ERR_ALREADY_EXIST = 40007;
var ERR_MISS_REQUIRE = exports.ERR_MISS_REQUIRE = 40008;
var ERR_USER_NO_BASEINFO = exports.ERR_USER_NO_BASEINFO = 40020;
var ERR_USER_DUP_LOGIN = exports.ERR_USER_DUP_LOGIN = 40021;
var ERR_USER_DUP_EMAIL = exports.ERR_USER_DUP_EMAIL = 40022;
var ERR_USER_CREATE_FAIL = exports.ERR_USER_CREATE_FAIL = 40023;
var ERR_USER_UPDATE_FAIL = exports.ERR_USER_UPDATE_FAIL = 40024;
var ERR_USER_UPD_NO_USER = exports.ERR_USER_UPD_NO_USER = 40025;
var ERR_TAXONOMY_DUP_TERM = exports.ERR_TAXONOMY_DUP_TERM = 40030;
var ERR_POST_TYPE_CHANGE_NOT_ALLOW = exports.ERR_POST_TYPE_CHANGE_NOT_ALLOW = 40040;
var ERR_POST_MISS_REQUIRE = exports.ERR_POST_MISS_REQUIRE = 40041;

var ERR_FILE_READ_FAIL = exports.ERR_FILE_READ_FAIL = 44001;
var ERR_UPLOAD_FAIL = exports.ERR_UPLOAD_FAIL = 44002;
var ERR_UPLOAD_USER_ABORT = exports.ERR_UPLOAD_USER_ABORT = 44003;

exports.default = _errcode2.default;

/*
 *
 * in your Test File, myfile.js

    import Errcode from './myerrcode'
    throw new Errcode('file read fail!', Errcode.ERR_FILE_READ_FAIL);
 *
 */