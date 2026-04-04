/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // //solution 1
    // if(typeof s !== "string" || s.length <= 0) return;
    //     let count = s.trim().split(" ")[s.trim().split(" ").length - 1].length;

    // Solution 2
    // check input
    if(typeof s !== "string" || s.length <= 0) return;
    let count = 0, i = s.length - 1;
    while(i >= 0) { 
        if(s[i] === ' ' && s[i - 1] !== undefined) {  
            i--;
            continue;  
        }
        // check ASCII Code for character which A => 65 and Z = 90 and a = 97 and z = 122 but there is constraint handle remain chars !@#$%^&*_=+ and so on  s consists of only English letters and spaces ' '. 
        // if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) 
        if(s[i] !== ' '){
            count++;
            if(s[i - 1] === ' ' || s[i - 1] === undefined)
                return count;
        }
        i--;
    }
    return count;
};