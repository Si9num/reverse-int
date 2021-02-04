module.exports = function reverse(n) {
    let num = n.toString().split("").reverse();
    if (num.length > 3) {
        let f = num.pop();
    }
    return +num.join("");

    
}
