export default function Errcode(message, errcode=-1) {
    this.name = 'Errcode';
    this.message = message || '';
    this.errcode = errcode;
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
    } else { 
        this.stack = (new Error(errcode+':'+message)).stack;
    }
    this.toJSON = () => {
        return { errcode: this.errcode, msg: this.message };
    }
    // this.toString = () => {
    //     return this.name+':'+this.errcode+':'+this.message
    // }
}
Errcode.prototype = Object.create(Error.prototype);
Errcode.prototype.constructor = Errcode;
