class Trie {
  constructor() {
    this.count = 0;
  }
  insert(word, key) {
    let letter = word.charAt(0);

    if (word === '') {
      key['end'] = true;
      this.count++;
      return;
    } else if (key) {
      if (!key[letter]) {
        key[letter] = {};
      }
      this.insert(word.substr(1), key[letter]);
    } else {
      if (!this[letter]) {
        this[letter] = {};
      }
      this.insert(word.substr(1), this[letter]);
    }
  }
  populate(array) {
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }
  suggest(phrase) {
    let letters = phrase.split('');
    let key = letters.reduce((key, letter) => {
      return key[letter];
    }, this);

    return this.getWords(phrase, key);
  }
  getWords(phrase, key) {
    let results = [];
    let letters = Object.keys(key);

    if (letters.length === 1 && letters.includes('end')) {
      results.push(phrase);
      return results;
    }
    for (let i = 0; i < letters.length; i++) {
      if (key[letters[i]] === true) {
        results.push(phrase);
      } else {
        let newPhrase = phrase + letters[i];

        results.push(...this.getWords(newPhrase, key[letters[i]]));
      }
    }
    return results;
  }
}

module.exports = Trie;

