import { assert } from 'chai';
import Trie from '../lib/Trie';
import fs from 'fs';

 describe('Should create a trie andi import the dictionary', () =>  {
   it('should create a trie', () => {
     let trie = new Trie();
     assert.isObject(trie);
   });
   it('Should populate with the dictionary', () => {
     const trie = new Trie();
     const text = "/usr/share/dict/words";
     const dictionary = fs.readFileSync(text).toString().trim().split('\n');
     trie.populate(dictionary);
     assert.equal(trie.count, dictionary.length);
   });
 });
