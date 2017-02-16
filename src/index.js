export default function Errcode(message, errcode=-1) {
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
