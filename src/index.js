let morse =new Map ([
    ['.-','a'],
    ['-...','b'],
    ['-.-.','c'],
    ['-..','d'],
    ['.','e'],
    ['..-.','f'],
    ['--.','g'],
    ['....','h'],
    ['..','i'],
    ['.---','j'],
    ['-.-','k'],
    ['.-..','l'],
    ['--','m'],
    ['-.','n'],
    ['---','o'],
    ['.--.','p'],
    ['--.-','q'],
    ['.-.','r'],
    ['...','s'],
    ['-','t'],
    ['..-','u'],
    ['...-','v'],
    ['.--','w'],
    ['-..-','x'],
    ['-.--','y'],
    ['--..','z'],
    ['.----','1'],
    ['..---','2'],
    ['...--','3'],
    ['....-','4'],
    ['.....','5'],
    ['-....','6'],
    ['--...','7'],
    ['---..','8'],
    ['----.','9'],
    ['-----','0'],
    ['**********',' ']
    ])
    
    function morseToLetter(str) {
        return morse.get(str);
    }
    
    function wordFromExpr(str){
        let words = [];
        for (let i = 0; i < str.length; i += 10) {
            let word = str.slice(i, i + 10);
            words.push(word);
        }
        return words;
    }
    
    function BinToMorse (str){
       let newstr='';
        newstr=str.replace(/^0+/, '')
                  .replace(/11/g, '-')
                  .replace(/10/g, '.');
        return newstr;
    
    }
    
    function decode (expr){
        let newarr = wordFromExpr(expr);
        let str = '';
        for (let i = 0; i < newarr.length; i++) {
            let str_i = BinToMorse(newarr[i]);
            str += morseToLetter(str_i);
              }
        return str;
    }

module.exports = {
    decode,
};