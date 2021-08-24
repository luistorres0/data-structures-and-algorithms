class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const entry = [key, value];
    const index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push(entry);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index];
    if (bucket) {
      for (let arr of bucket) {
        if (arr[0] === key) {
          return arr[1];
        }
      }
    }

    return undefined;
  }

  // **DOES NOT ACCOUNT FOR COLLISIONS**
  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

module.exports = MyHashTable;
