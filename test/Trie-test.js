import { assert } from 'chai';
import Trie from '../lib/Trie';

 describe('Should be able to make Trie and insert words', function() {
   it('Should be able to create a new Trie', function() {
     let trie = new Trie();
     assert.isObject(trie);
   });
   it('Should be able to insert a word', () => {
     let trie = new Trie();
     trie.insert('hello');
     let testTrie = {
       count : 1,
       'h' : {
         'e' : {
           'l' : {
             'l' : {
               'o' : {
                 'end' : true }
             }
           }
         }
       }
     }
     assert.deepEqual(testTrie, trie);
   });
   it('Should keep track of how many words have been inserted', () => {
     let trie = new Trie();
     trie.insert('hello');
     assert.equal(trie.count, 1);
     trie.insert('world');
     assert.equal(trie.count, 2);
   });
   it('Should not count duplicate words twice', () => {
     let trie = new Trie()
     trie.insert('hello');
     assert.equal(trie.count, 1);
     trie.insert('hello');
     assert.equal(trie.count, 1);
   });
 });
describe('Should be able to suggest words based on matching prefix', () => {
  it('Should suggest all words with the matching prefix', () => {
    let  trie = new Trie();
    trie.insert('hello');
    trie.insert('help');
    trie.insert('helicopter');
    trie.insert('airplane');
    let results = trie.suggest('h');
    let results2 = trie.suggest('heli');
    let results3 = trie.suggest('a');
    assert.deepEqual(results, ['hello', 'help','helicopter']);
    assert.deepEqual(results2, ['helicopter']);
    assert.deepEqual(results3, ['airplane']);
  });
});
