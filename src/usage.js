/*
 *
 * create your own Errcode file. Errcode.js:
 */
export const ERR_UNKNOWN = 40001;
export const ERR_CODE1 = 40002;
export const ERR_PARAM_ERROR = 40003;
export const ERR_NO_SUCH_ENTITY = 40004;
export const ERR_INSERT_DB_FAIL = 40005;
export const ERR_UPDATE_DB_FAIL = 40006;
export const ERR_ALREADY_EXIST = 40007;
export const ERR_MISS_REQUIRE = 40008;
export const ERR_USER_NO_BASEINFO = 40020;
export const ERR_USER_DUP_LOGIN = 40021;
export const ERR_USER_DUP_EMAIL = 40022;
export const ERR_USER_CREATE_FAIL = 40023;
export const ERR_USER_UPDATE_FAIL = 40024;
export const ERR_USER_UPD_NO_USER = 40025;
export const ERR_TAXONOMY_DUP_TERM = 40030;
export const ERR_POST_TYPE_CHANGE_NOT_ALLOW = 40040;
export const ERR_POST_MISS_REQUIRE = 40041;

export const ERR_FILE_READ_FAIL = 44001;
export const ERR_UPLOAD_FAIL = 44002;
export const ERR_UPLOAD_USER_ABORT = 44003;

export default from 'errcode';


/*
 *
 * in your Test File, myfile.js

    import Errcode, * as EC from './myerrcode'
    throw new Errcode('file read fail!', EC.ERR_FILE_READ_FAIL);
 *
 */
