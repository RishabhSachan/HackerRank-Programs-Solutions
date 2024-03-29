#
#In a computer security course, you just learned about password decryption. Your fellow student has created their own password encryption method, and they've asked you to test how secure it is. Your task is to recover the original password given the encrypted password provided to you by your classmate.
#
# 
#
#At first, it seems impossible. But one day after class, you catch a peek of your classmate's notebook where the encryption process is noted. You snap a quick picture of it to reference later. It says this:
#
# 
#
#Given string s, let s[i] represent the ith character in the string s, using 0-based indexing.
#
#Initially i = 0.
#If s[i] is lowercase and the next character s[i+1] is uppercase, swap them, add a '*' after them, and move to i+2.
#If s[i] is a number, replace it with 0, place the original number at the start, and move to i+1.
#Else, move to i+1.
#Stop if i is more than or equal to the string length. Otherwise, go to step 2.
# 
#
#There's even an example mentioned in the notebook. When encrypted, the string "hAck3rr4nk" becomes "43Ah*ck0rr0nk". (Note: the original string, "hAck3rr4nk", does not contain the character 0.)
#
# 
#
#Note:
#
#The original string always contains digits from 1 to 9 and does not contain 0.
#The original string always contains only alpha-numeric characters.
# 
#
#Using this information, your task is to determine the original password (before encryption) when given the encrypted password from your classmate.
#
# 
#
#Function Description
#Complete the function decryptPassword in the editor below. decryptPassword must return the original password string before it was encrypted by your classmate.
#
# 
#
#decryptPassword has the following parameter:
#
#    s:  the password string after it was encrypted by your classmate
#
# 
#
#Constraints
#
#1 ≤ length of s ≤ 105
#
#s can contain Latin alphabet characters (a-z, A-Z), numbers (0-9), and the character '*'.
#
# 
#
#Input Format For Custom Testing
#The first line contains the password string obtained after it was encrypted by your classmate.
#
#Sample Case 0
#Sample Input For Custom Testing
#
#51Pa*0Lp*0e
#Sample Output
#
#aP1pL5e
#Explanation
#
#If we apply the sequence of operations on the string aP1pL5e, we get the string 51Pa*0Lp*0e.
#
#We start at the letter a since i = 0.
#Since a is lowercase and the next character P is uppercase, we swap them, add a '*' after, and move to the next designated character (i+2). So currently it is Pa*1pL5e.
#Now we're on the character 1. This is a number, so we replace it with 0, put the original number 1 at the start, and continue to the next character (i+1). Now it is 1Pa*0pL5e.
#We're still in the middle of the string (i does not equal the string length), so we repeat the process again.
# 
#
#After that, 1Pa*0pL5e becomes 1Pa*0Lp*5e. Then, 1Pa*0Lp*5e becomes 51Pa*0Lp*0e. Since e is at the end of the string, it can't be swapped with the next character. Thus, aP1pL5e becomes 51Pa*0Lp*0e when encrypted.
#
#
#
#
#Solution: 
function decryptPassword(s) {
    let reverseStringArr = s.split("").reverse();
    reverseStringArr.map((s, i)=> {
        if(s==='0') reverseStringArr[i] = reverseStringArr.pop();
        if(s==='*') {
            let temp = reverseStringArr[i+1]
            reverseStringArr[i+1] = reverseStringArr[i+2];
            reverseStringArr[i+2] = temp;
            reverseStringArr[i] = null;
        }
    })
   return reverseStringArr.reverse().join("");
}
