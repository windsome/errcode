# errcode
an extension to Error object, provide error code.   
There maybe a lot of exceptions when working with koa and react, especially working with Koa2, there are too much try/catch, and the code become discusting.  
But if I throw Error, and do error handling at the outest? we can skip over a lot of code.  
But original Error only contain message attribute, no more other information. if we supply more, espcially the error code, maybe better.  

# Getting Started
1, ```npm install --save errcode``` to your project.  
2, At the Koa2 entry and client side entry, register Errcodes  
```
import { registerErrcodes } from 'errcode';
registerErrcodes({
    ERR_UNKNOWN: 40001,
    ERR_CODE1: 40002,
    ERR_PARAM_ERROR: 40003,
    ERR_NO_SUCH_ENTITY: 40004,
    ERR_INSERT_DB_FAIL: 40005,
    ERR_UPDATE_DB_FAIL: 40006
});
```
or import from errcode file.  
3, using errorcode.  
```
import Errcode from 'errcode';
throw new Errcode("there is an error insert item XX!", Errcode.ERR_INSERT_DB_FAIL);
```
# Code
code is simple.   
```
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

export default function Errcode(message, errcode=ERR_UNKNOWN) {
    this.name = 'Errcode';
    this.message = message || '';
    this.errcode = errcode;
    this.stack = (new Error()).stack;
    this.toJSON = () => {
        return { errcode: this.errcode, msg: this.message };
    }
}
Errcode.prototype = Object.create(Error.prototype);
Errcode.prototype.constructor = Errcode;
```

# Contribute

# License


