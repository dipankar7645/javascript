function ispalindrome(str){
    const rev = str.split("").reverse().join("")
    return str === rev;
}
console.log(ispalindrome("gfgs"))