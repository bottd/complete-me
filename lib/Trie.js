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
    return this.counter;
  }
  suggest(word){
    word = word.toLowerCase();
    let array = [];
    let key = this;
    let split = word.split('');
    if (!this[split[0]]) {
      return;
    }
  }
  populate(array){
    for(let i = 0; i < array.length; i++){
      this.insert(array[i]);
    }
    // pass in array and add all words to Trie
  }
}

const test = new Trie();
test.insert('text');
test.insert('test');
console.log(test.t);
test.suggest('te');
