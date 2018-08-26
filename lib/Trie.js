class Trie{
  constructor(){
    this.counter = 0;
  }
  insert(word, key){
    if (word === '') {
      key['end'] = true;
      this.counter++;
      return
    }
    else if (key) {
      if (!key[word.charAt(0)]){
        key[word.charAt(0)] = {};
      }
      this.insert(word.substr(1), key[word.charAt(0)]);
    } else {
      if (!this[word.charAt(0)]) {
        this[word.charAt(0)] = {};
      }
    this.insert(word.substr(1), this[word.charAt(0)]);
    }
  }
  count(){
    // return how many words are in Trie
    return this.counter;
  }
  populate(array){
    // pass in array and add all words to Trie
  }
}

const test = new Trie();
test.insert('text');
test.insert('test');
console.log(test.t.e.x.t);
console.log(test.t.e.s.t);
console.log(test.count());
