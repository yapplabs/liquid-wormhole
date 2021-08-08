// All Credit for this goes to the Ember.js Core Team

// This exists because `Object.create(null)` is absurdly slow compared
// to `new EmptyObject()`. In either case, you want a null prototype
// when you're treating the object instances as arbitrary dictionaries
// and don't want your keys colliding with build-in methods on the
// default object prototype.

const proto = Object.create(null, {
  // without this, we will always still end up with (new
  // EmptyObject()).constructor === Object
  constructor: {
    value: undefined,
    enumerable: false,
    writable: true
  }
});

function EmptyObject() {}
EmptyObject.prototype = proto;

// Below from https://github.com/runspired/perf-primitives

const UNDEFINED_KEY = Object.create(null);

export default class HashMap {

  constructor(entries) {
    this._data = new EmptyObject();

    if (entries) {
      for (let i = 0; i < entries.length; i++) {
        this.data[entries[i][0]] = entries[i][1];
      }
    }
  }

  forEach(cb) {
    for (let key in this._data) {
      // skip undefined
      if (this._data[key] !== UNDEFINED_KEY) {
        cb(this._data[key], key);
      }
    }

    return this;
  }

  get(key) {
    let val = this._data[key];

    return val === UNDEFINED_KEY ? undefined : val;
  }

  set(key, value) {
    this._data[key] = value;

    return this;
  }

  delete(key) {
    this._data[key] = UNDEFINED_KEY;

    return true;
  }

}