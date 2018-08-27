class Trie{
  constructor(){
    this.count = 0;
  }
  insert(word, key){
    if (word === '') {
      key['end'] = true;
      this.count++;
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
  populate(array){
    for(let i = 0; i < array.length; i++){
      this.insert(array[i]);
    }
    // pass in array and add all words to Trie
  }
  suggest(phrase){
    // take in phrase and list all words in Trie that have that prefix
    // fix errors that come when keys do not exist in trie.
    let results = [];
    let letters = phrase.split('');
    let key = letters.reduce((key, letter) => {
      return key[letter];
    }, this);
    console.log(key);
    console.log(Object.keys(key));
    return results;
  }
  getWords(phrase, key){
    // Return all words past certain point in Trie in an array
    let results = [];
    let letters = Object.keys(key);
    if (letters.length === 1 && letters.includes('end')) {
      results.push(phrase);
      return results;
    }
    for (let i = 0; i < letters.length; i++){
      if (key[letters[i]] === 'end') {
        results.push(phrase);
      } else {
        let newPhrase = phrase + letters[i]
        results.push(...this.getWords(newPhrase, key[letters[i]]));
      }
    }
    return results;
  }
}

const test = new Trie();
test.insert('text');
test.insert('test');
console.log(test.t);
test.suggest('te');
