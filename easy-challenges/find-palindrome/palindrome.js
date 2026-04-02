
/** 
 * any integer number when divide on 10 extract the last digit in number
 * which js not has integer datatype and number accept decimal numbers ex: 5.5 (must use Math.floor to random downward number below it)
 * A- Get remainder from division input on 10 (% module)
 * B- palindrome (reversed number) to keep trace digit in the same category inside number so multiply palindrome * 10 then add extract digit
 * C- decrease the number by division on 10 by use Math.floor to random downward number below it
 */


var isPalindrome = function(x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false;

    let palindrome = 0, remainder, num = x;
    
    while(num > 0) {
        remainder = num % 10;
        palindrome = palindrome * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return palindrome === x;
}