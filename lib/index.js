const Trie = require('./Trie');
const fs = require('fs');

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

const prefixTrie = new Trie();
const test = new Trie();

prefixTrie.populate(dictionary);
test.insert('hello');
test.insert('world');

console.log('Tree populated!');
console.log(prefixTrie.count);
console.log(test.count);
