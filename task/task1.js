/*Javascript Task - 1
Write a function isPalindrome(str) to check whether the string is a palindrome.

 Write a program that prints numbers 1 to 100 but replaces multiples of 3 with "Fizz",      multiples of 5 with "Buzz", and both with "FizzBuzz".

 Write a function flattenArray(arr) that flattens a multi-dimensional array.

 Write a function areAnagrams(str1, str2) to check if two strings are anagrams.

Write a function sumArray(arr) that calculates the sum of all numbers in an array.

Write a function findMax(arr) that returns the maximum number in an array.

Write a function removeDuplicates(arr) that removes duplicates from an array.

 Write a function reverseString(str) that reverses a given string.

Write a function factorial(n) that computes the factorial of a given number n.

Write a function capitalizeWords(str) that capitalizes the first letter of each word in a string. */


    
    function palindrome(str) {
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1)) 
            console.log("false");
      }
      console("true");
    }
 
 palindrome("dad");


