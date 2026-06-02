/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const 
        // MAX =>  Math.pow(2,31) - 1 = 2147483647 
        MAX = Math.pow(2,31) - 1, 
        // LIMIT => Math.floor(MAX / 10) = 214748364 or faster than Math.floor is bitwise OR | as this x = (x / 10) | 0 => force to x is integer
        LIMIT = Math.floor(MAX / 10), 
        // FRACTION => (MAX % 10) = 2147483647 % 10 = 7
        FRACTION = (MAX % 10)

    let remainder = 0, 
        // all compute nums deals inside loop is must be or always positive so only keep in your mind handle one side of range is MAX not MIN -2147483648
        num = Math.abs(x), 
        result = 0
    while(num) {
        remainder = num % 10

        if(result > LIMIT ||  result === LIMIT && remainder > FRACTION) return 0

        result = result * 10 + remainder
        num = (num / 10) | 0
    }
    // if use x > 0? and x === 0 so return -0 its fine in js but is not real number must be 0
    return x >= 0 ? result : -result
};

