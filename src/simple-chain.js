const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    
    // throw new NotImplementedError('Not implemented');
    if (typeof position != 'number' || !this.chain[position - 1]) {
      this.chain = [];
      console.log(this.chain);
      throw Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let res = ""
    this.chain.forEach((item) => {
      res += `~( ${item} )~`
    });
    this.chain = [];
    return res.slice(1, -1);
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));

module.exports = {
  chainMaker
};
