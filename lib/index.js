const Trie = require('./Trie');
const fs = require('fs');

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

const prefixTrie = new Trie();

prefixTrie.populate(dictionary);
