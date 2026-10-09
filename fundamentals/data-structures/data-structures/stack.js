function createStack(maxSize) {
  //   // build your stack object inside this factory function
    const stack = {
        quantity: 0,
        storage: {},
        maxSize: maxSize,
        push (item) {
          this.quantity++
          this.storage[this.quantity] = item
   },
        pop () {
          const item = this.storage[this.quantity];
          delete this.storage[this.quantity];
          this.quantity--;
          return item;
        },
      }
  return stack;
  }
  module.exports = createStack;