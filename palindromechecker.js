function palindromeChecker(word){
    let a = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    let s = "";
    for (const c of a){
        s = c+s;
    }
    return (s === a);
}