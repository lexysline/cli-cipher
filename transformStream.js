const stream = require('stream');
const { action } = require('./checkArgs');

class Transform extends stream.Transform {
  constructor(fn, action, shift) {
    super();
    this.fn = fn;
    this.shift = this._combine(action, shift);
  }
  _combine(action, shift) {
    return action === 'encode' ? +shift : -shift;
  }
  _transform(data, encoding, callback) {
    this.push(this.fn(data.toString(), this.shift));
    callback();
  }
}

module.exports = Transform;
