// src/data/questions.js

const pythonQuestions = [
  { 
    id: "py1", title: "1. Python: Hello World", difficulty: "Easy", targetLanguage: "python", 
    description: "Print 'Hello Python' to standard output.", examples: "Output:\nHello Python", 
    testCases: [
      { id: 1, input: "", expectedOutput: "Hello Python", isHidden: false },
      { id: 2, input: "", expectedOutput: "Hello Python", isHidden: false },
      { id: 3, input: "", expectedOutput: "Hello Python", isHidden: false },
      { id: 4, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 5, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 6, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 7, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 8, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 9, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 10, input: "", expectedOutput: "Hello Python", isHidden: true },
      { id: 11, input: "", expectedOutput: "Hello Python", isHidden: true }
    ] 
  },
  { 
    id: "py2", title: "2. Python: Add Two Numbers", difficulty: "Easy", targetLanguage: "python", 
    description: "Read two integers on separate lines and print their sum.", examples: "Input:\n2\n3\nOutput:\n5", 
    testCases: [
      { id: 1, input: "2\n3", expectedOutput: "5", isHidden: false },
      { id: 2, input: "10\n20", expectedOutput: "30", isHidden: false },
      { id: 3, input: "7\n7", expectedOutput: "14", isHidden: false },
      { id: 4, input: "-5\n10", expectedOutput: "5", isHidden: true },
      { id: 5, input: "100\n200", expectedOutput: "300", isHidden: true },
      { id: 6, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 7, input: "-1\n-1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "999\n1", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "123456\n654321", expectedOutput: "777777", isHidden: true },
      { id: 10, input: "-100\n50", expectedOutput: "-50", isHidden: true },
      { id: 11, input: "1000000\n2000000", expectedOutput: "3000000", isHidden: true }
    ] 
  },
  { 
    id: "py3", title: "3. Python: Subtract Two Numbers", difficulty: "Easy", targetLanguage: "python", 
    description: "Read two integers on separate lines and print the result of subtracting the second from the first (a - b).", examples: "Input:\n10\n4\nOutput:\n6", 
    testCases: [
      { id: 1, input: "10\n4", expectedOutput: "6", isHidden: false },
      { id: 2, input: "20\n5", expectedOutput: "15", isHidden: false },
      { id: 3, input: "0\n5", expectedOutput: "-5", isHidden: false },
      { id: 4, input: "5\n5", expectedOutput: "0", isHidden: true },
      { id: 5, input: "-5\n-10", expectedOutput: "5", isHidden: true },
      { id: 6, input: "100\n50", expectedOutput: "50", isHidden: true },
      { id: 7, input: "-1\n1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 9, input: "1000\n1", expectedOutput: "999", isHidden: true },
      { id: 10, input: "-100\n-100", expectedOutput: "0", isHidden: true },
      { id: 11, input: "7\n20", expectedOutput: "-13", isHidden: true }
    ] 
  },
  { 
    id: "py4", title: "4. Python: Multiply Two Numbers", difficulty: "Easy", targetLanguage: "python", 
    description: "Read two integers on separate lines and print their product.", examples: "Input:\n3\n4\nOutput:\n12", 
    testCases: [
      { id: 1, input: "3\n4", expectedOutput: "12", isHidden: false },
      { id: 2, input: "5\n6", expectedOutput: "30", isHidden: false },
      { id: 3, input: "0\n10", expectedOutput: "0", isHidden: false },
      { id: 4, input: "-3\n4", expectedOutput: "-12", isHidden: true },
      { id: 5, input: "-3\n-4", expectedOutput: "12", isHidden: true },
      { id: 6, input: "7\n8", expectedOutput: "56", isHidden: true },
      { id: 7, input: "10\n10", expectedOutput: "100", isHidden: true },
      { id: 8, input: "1\n999", expectedOutput: "999", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "1", isHidden: true },
      { id: 10, input: "12\n12", expectedOutput: "144", isHidden: true },
      { id: 11, input: "100\n100", expectedOutput: "10000", isHidden: true }
    ] 
  },
  { 
    id: "py5", title: "5. Python: Divide Two Numbers", difficulty: "Easy", targetLanguage: "python", 
    description: "Read two non-negative integers a and b on separate lines (b is not zero, and a is always exactly divisible by b) and print the integer quotient a / b.", examples: "Input:\n10\n2\nOutput:\n5", 
    testCases: [
      { id: 1, input: "10\n2", expectedOutput: "5", isHidden: false },
      { id: 2, input: "20\n4", expectedOutput: "5", isHidden: false },
      { id: 3, input: "9\n3", expectedOutput: "3", isHidden: false },
      { id: 4, input: "100\n10", expectedOutput: "10", isHidden: true },
      { id: 5, input: "81\n9", expectedOutput: "9", isHidden: true },
      { id: 6, input: "144\n12", expectedOutput: "12", isHidden: true },
      { id: 7, input: "0\n5", expectedOutput: "0", isHidden: true },
      { id: 8, input: "1000\n100", expectedOutput: "10", isHidden: true },
      { id: 9, input: "49\n7", expectedOutput: "7", isHidden: true },
      { id: 10, input: "256\n16", expectedOutput: "16", isHidden: true },
      { id: 11, input: "500\n25", expectedOutput: "20", isHidden: true }
    ] 
  },
  { 
    id: "py6", title: "6. Python: Check Even or Odd", difficulty: "Easy", targetLanguage: "python", 
    description: "Read one integer and print 'Even' if it is even, or 'Odd' if it is odd.", examples: "Input:\n4\nOutput:\nEven", 
    testCases: [
      { id: 1, input: "4", expectedOutput: "Even", isHidden: false },
      { id: 2, input: "7", expectedOutput: "Odd", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Even", isHidden: false },
      { id: 4, input: "-4", expectedOutput: "Even", isHidden: true },
      { id: 5, input: "-7", expectedOutput: "Odd", isHidden: true },
      { id: 6, input: "100", expectedOutput: "Even", isHidden: true },
      { id: 7, input: "101", expectedOutput: "Odd", isHidden: true },
      { id: 8, input: "-1", expectedOutput: "Odd", isHidden: true },
      { id: 9, input: "999999", expectedOutput: "Odd", isHidden: true },
      { id: 10, input: "1000000", expectedOutput: "Even", isHidden: true },
      { id: 11, input: "2", expectedOutput: "Even", isHidden: true }
    ] 
  },
  { 
    id: "py7", title: "7. Python: Find Maximum of Two Numbers", difficulty: "Easy", targetLanguage: "python", 
    description: "Read two integers on separate lines and print the larger of the two. If they are equal, print that number.", examples: "Input:\n3\n7\nOutput:\n7", 
    testCases: [
      { id: 1, input: "3\n7", expectedOutput: "7", isHidden: false },
      { id: 2, input: "10\n2", expectedOutput: "10", isHidden: false },
      { id: 3, input: "5\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "-3\n-7", expectedOutput: "-3", isHidden: true },
      { id: 5, input: "0\n-1", expectedOutput: "0", isHidden: true },
      { id: 6, input: "100\n99", expectedOutput: "100", isHidden: true },
      { id: 7, input: "-50\n50", expectedOutput: "50", isHidden: true },
      { id: 8, input: "1000\n1000", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "-1", isHidden: true },
      { id: 10, input: "42\n7", expectedOutput: "42", isHidden: true },
      { id: 11, input: "8\n9", expectedOutput: "9", isHidden: true }
    ] 
  },
  { 
    id: "py8", title: "8. Python: Factorial of a Number", difficulty: "Medium", targetLanguage: "python", 
    description: "Read an integer n (0 <= n <= 12) and print n! (n factorial).", examples: "Input:\n0\nOutput:\n1", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "1", isHidden: false },
      { id: 2, input: "5", expectedOutput: "120", isHidden: false },
      { id: 3, input: "3", expectedOutput: "6", isHidden: false },
      { id: 4, input: "1", expectedOutput: "1", isHidden: true },
      { id: 5, input: "2", expectedOutput: "2", isHidden: true },
      { id: 6, input: "4", expectedOutput: "24", isHidden: true },
      { id: 7, input: "6", expectedOutput: "720", isHidden: true },
      { id: 8, input: "7", expectedOutput: "5040", isHidden: true },
      { id: 9, input: "8", expectedOutput: "40320", isHidden: true },
      { id: 10, input: "10", expectedOutput: "3628800", isHidden: true },
      { id: 11, input: "12", expectedOutput: "479001600", isHidden: true }
    ] 
  },
  { 
    id: "py9", title: "9. Python: Sum of Digits", difficulty: "Easy", targetLanguage: "python", 
    description: "Read a non-negative integer and print the sum of its digits.", examples: "Input:\n123\nOutput:\n6", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "6", isHidden: false },
      { id: 2, input: "9", expectedOutput: "9", isHidden: false },
      { id: 3, input: "1000", expectedOutput: "1", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "555", expectedOutput: "15", isHidden: true },
      { id: 6, input: "999999", expectedOutput: "54", isHidden: true },
      { id: 7, input: "10", expectedOutput: "1", isHidden: true },
      { id: 8, input: "48", expectedOutput: "12", isHidden: true },
      { id: 9, input: "100000", expectedOutput: "1", isHidden: true },
      { id: 10, input: "87654321", expectedOutput: "36", isHidden: true },
      { id: 11, input: "11111", expectedOutput: "5", isHidden: true }
    ] 
  },
  { 
    id: "py10", title: "10. Python: Reverse a Number", difficulty: "Medium", targetLanguage: "python", 
    description: "Read a non-negative integer and print it with its digits reversed. Leading zeros produced by the reversal should be dropped (print the result as a normal integer).", examples: "Input:\n123\nOutput:\n321", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "321", isHidden: false },
      { id: 2, input: "100", expectedOutput: "1", isHidden: false },
      { id: 3, input: "7", expectedOutput: "7", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "900", expectedOutput: "9", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "54321", isHidden: true },
      { id: 7, input: "1000000", expectedOutput: "1", isHidden: true },
      { id: 8, input: "4321", expectedOutput: "1234", isHidden: true },
      { id: 9, input: "10", expectedOutput: "1", isHidden: true },
      { id: 10, input: "555", expectedOutput: "555", isHidden: true },
      { id: 11, input: "908", expectedOutput: "809", isHidden: true }
    ] 
  },
  { 
    id: "py11", title: "11. Python: Check Palindrome Number", difficulty: "Medium", targetLanguage: "python", 
    description: "Read a non-negative integer and print 'Yes' if its digits form a palindrome (read the same forwards and backwards), or 'No' otherwise.", examples: "Input:\n121\nOutput:\nYes", 
    testCases: [
      { id: 1, input: "121", expectedOutput: "Yes", isHidden: false },
      { id: 2, input: "123", expectedOutput: "No", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Yes", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Yes", isHidden: true },
      { id: 5, input: "12321", expectedOutput: "Yes", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "No", isHidden: true },
      { id: 7, input: "11", expectedOutput: "Yes", isHidden: true },
      { id: 8, input: "100", expectedOutput: "No", isHidden: true },
      { id: 9, input: "7887", expectedOutput: "Yes", isHidden: true },
      { id: 10, input: "999999", expectedOutput: "Yes", isHidden: true },
      { id: 11, input: "10", expectedOutput: "No", isHidden: true }
    ] 
  },
  { 
    id: "py12", title: "12. Python: Nth Fibonacci Number", difficulty: "Medium", targetLanguage: "python", 
    description: "Read an integer n (0 <= n <= 30) and print the nth Fibonacci number, where fib(0) = 0, fib(1) = 1, and fib(k) = fib(k-1) + fib(k-2) for k >= 2.", examples: "Input:\n0\nOutput:\n0", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "0", isHidden: false },
      { id: 2, input: "1", expectedOutput: "1", isHidden: false },
      { id: 3, input: "5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "2", expectedOutput: "1", isHidden: true },
      { id: 5, input: "10", expectedOutput: "55", isHidden: true },
      { id: 6, input: "15", expectedOutput: "610", isHidden: true },
      { id: 7, input: "20", expectedOutput: "6765", isHidden: true },
      { id: 8, input: "25", expectedOutput: "75025", isHidden: true },
      { id: 9, input: "30", expectedOutput: "832040", isHidden: true },
      { id: 10, input: "7", expectedOutput: "13", isHidden: true },
      { id: 11, input: "12", expectedOutput: "144", isHidden: true }
    ] 
  },
  { 
    id: "py13", title: "13. Python: Check Prime Number", difficulty: "Medium", targetLanguage: "python", 
    description: "Read an integer n and print 'Prime' if n is a prime number, or 'Not Prime' otherwise (numbers less than 2 are not prime).", examples: "Input:\n7\nOutput:\nPrime", 
    testCases: [
      { id: 1, input: "7", expectedOutput: "Prime", isHidden: false },
      { id: 2, input: "10", expectedOutput: "Not Prime", isHidden: false },
      { id: 3, input: "2", expectedOutput: "Prime", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Not Prime", isHidden: true },
      { id: 5, input: "0", expectedOutput: "Not Prime", isHidden: true },
      { id: 6, input: "-5", expectedOutput: "Not Prime", isHidden: true },
      { id: 7, input: "17", expectedOutput: "Prime", isHidden: true },
      { id: 8, input: "97", expectedOutput: "Prime", isHidden: true },
      { id: 9, input: "100", expectedOutput: "Not Prime", isHidden: true },
      { id: 10, input: "29", expectedOutput: "Prime", isHidden: true },
      { id: 11, input: "91", expectedOutput: "Not Prime", isHidden: true }
    ] 
  },
  { 
    id: "py14", title: "14. Python: Sum of Array Elements", difficulty: "Medium", targetLanguage: "python", 
    description: "Read an integer n (n can be 0), followed by n integers each on its own line, and print the sum of the n integers. If n is 0, print 0.", examples: "Input:\n3\n1\n2\n3\nOutput:\n6", 
    testCases: [
      { id: 1, input: "3\n1\n2\n3", expectedOutput: "6", isHidden: false },
      { id: 2, input: "4\n10\n20\n30\n40", expectedOutput: "100", isHidden: false },
      { id: 3, input: "1\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "5\n1\n1\n1\n1\n1", expectedOutput: "5", isHidden: true },
      { id: 5, input: "2\n-5\n5", expectedOutput: "0", isHidden: true },
      { id: 6, input: "6\n10\n-10\n20\n-20\n30\n-30", expectedOutput: "0", isHidden: true },
      { id: 7, input: "0", expectedOutput: "0", isHidden: true },
      { id: 8, input: "3\n100\n200\n300", expectedOutput: "600", isHidden: true },
      { id: 9, input: "4\n-1\n-2\n-3\n-4", expectedOutput: "-10", isHidden: true },
      { id: 10, input: "5\n7\n7\n7\n7\n7", expectedOutput: "35", isHidden: true },
      { id: 11, input: "3\n1000\n2000\n3000", expectedOutput: "6000", isHidden: true }
    ] 
  },
  { 
    id: "py15", title: "15. Python: Count Vowels in a String", difficulty: "Medium", targetLanguage: "python", 
    description: "Read a line of text and print the number of vowels (a, e, i, o, u, case-insensitive) it contains.", examples: "Input:\nhello\nOutput:\n2", 
    testCases: [
      { id: 1, input: "hello", expectedOutput: "2", isHidden: false },
      { id: 2, input: "Programming", expectedOutput: "3", isHidden: false },
      { id: 3, input: "xyz", expectedOutput: "0", isHidden: false },
      { id: 4, input: "AEIOU", expectedOutput: "5", isHidden: true },
      { id: 5, input: "The Quick Brown Fox", expectedOutput: "5", isHidden: true },
      { id: 6, input: "bcdfg", expectedOutput: "0", isHidden: true },
      { id: 7, input: "aaaaa", expectedOutput: "5", isHidden: true },
      { id: 8, input: "Hello World", expectedOutput: "3", isHidden: true },
      { id: 9, input: "Vowels", expectedOutput: "2", isHidden: true },
      { id: 10, input: "", expectedOutput: "0", isHidden: true },
      { id: 11, input: "Supercalifragilisticexpialidocious", expectedOutput: "16", isHidden: true }
    ] 
  },
];

const javaQuestions = [
  { 
    id: "j1", title: "1. Java: Hello World", difficulty: "Easy", targetLanguage: "java", 
    description: "Print 'Hello Java' to standard output.", examples: "Output:\nHello Java", 
    testCases: [
      { id: 1, input: "", expectedOutput: "Hello Java", isHidden: false },
      { id: 2, input: "", expectedOutput: "Hello Java", isHidden: false },
      { id: 3, input: "", expectedOutput: "Hello Java", isHidden: false },
      { id: 4, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 5, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 6, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 7, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 8, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 9, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 10, input: "", expectedOutput: "Hello Java", isHidden: true },
      { id: 11, input: "", expectedOutput: "Hello Java", isHidden: true }
    ] 
  },
  { 
    id: "j2", title: "2. Java: Add Two Numbers", difficulty: "Easy", targetLanguage: "java", 
    description: "Read two integers on separate lines and print their sum.", examples: "Input:\n2\n3\nOutput:\n5", 
    testCases: [
      { id: 1, input: "2\n3", expectedOutput: "5", isHidden: false },
      { id: 2, input: "10\n20", expectedOutput: "30", isHidden: false },
      { id: 3, input: "7\n7", expectedOutput: "14", isHidden: false },
      { id: 4, input: "-5\n10", expectedOutput: "5", isHidden: true },
      { id: 5, input: "100\n200", expectedOutput: "300", isHidden: true },
      { id: 6, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 7, input: "-1\n-1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "999\n1", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "123456\n654321", expectedOutput: "777777", isHidden: true },
      { id: 10, input: "-100\n50", expectedOutput: "-50", isHidden: true },
      { id: 11, input: "1000000\n2000000", expectedOutput: "3000000", isHidden: true }
    ] 
  },
  { 
    id: "j3", title: "3. Java: Subtract Two Numbers", difficulty: "Easy", targetLanguage: "java", 
    description: "Read two integers on separate lines and print the result of subtracting the second from the first (a - b).", examples: "Input:\n10\n4\nOutput:\n6", 
    testCases: [
      { id: 1, input: "10\n4", expectedOutput: "6", isHidden: false },
      { id: 2, input: "20\n5", expectedOutput: "15", isHidden: false },
      { id: 3, input: "0\n5", expectedOutput: "-5", isHidden: false },
      { id: 4, input: "5\n5", expectedOutput: "0", isHidden: true },
      { id: 5, input: "-5\n-10", expectedOutput: "5", isHidden: true },
      { id: 6, input: "100\n50", expectedOutput: "50", isHidden: true },
      { id: 7, input: "-1\n1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 9, input: "1000\n1", expectedOutput: "999", isHidden: true },
      { id: 10, input: "-100\n-100", expectedOutput: "0", isHidden: true },
      { id: 11, input: "7\n20", expectedOutput: "-13", isHidden: true }
    ] 
  },
  { 
    id: "j4", title: "4. Java: Multiply Two Numbers", difficulty: "Easy", targetLanguage: "java", 
    description: "Read two integers on separate lines and print their product.", examples: "Input:\n3\n4\nOutput:\n12", 
    testCases: [
      { id: 1, input: "3\n4", expectedOutput: "12", isHidden: false },
      { id: 2, input: "5\n6", expectedOutput: "30", isHidden: false },
      { id: 3, input: "0\n10", expectedOutput: "0", isHidden: false },
      { id: 4, input: "-3\n4", expectedOutput: "-12", isHidden: true },
      { id: 5, input: "-3\n-4", expectedOutput: "12", isHidden: true },
      { id: 6, input: "7\n8", expectedOutput: "56", isHidden: true },
      { id: 7, input: "10\n10", expectedOutput: "100", isHidden: true },
      { id: 8, input: "1\n999", expectedOutput: "999", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "1", isHidden: true },
      { id: 10, input: "12\n12", expectedOutput: "144", isHidden: true },
      { id: 11, input: "100\n100", expectedOutput: "10000", isHidden: true }
    ] 
  },
  { 
    id: "j5", title: "5. Java: Divide Two Numbers", difficulty: "Easy", targetLanguage: "java", 
    description: "Read two non-negative integers a and b on separate lines (b is not zero, and a is always exactly divisible by b) and print the integer quotient a / b.", examples: "Input:\n10\n2\nOutput:\n5", 
    testCases: [
      { id: 1, input: "10\n2", expectedOutput: "5", isHidden: false },
      { id: 2, input: "20\n4", expectedOutput: "5", isHidden: false },
      { id: 3, input: "9\n3", expectedOutput: "3", isHidden: false },
      { id: 4, input: "100\n10", expectedOutput: "10", isHidden: true },
      { id: 5, input: "81\n9", expectedOutput: "9", isHidden: true },
      { id: 6, input: "144\n12", expectedOutput: "12", isHidden: true },
      { id: 7, input: "0\n5", expectedOutput: "0", isHidden: true },
      { id: 8, input: "1000\n100", expectedOutput: "10", isHidden: true },
      { id: 9, input: "49\n7", expectedOutput: "7", isHidden: true },
      { id: 10, input: "256\n16", expectedOutput: "16", isHidden: true },
      { id: 11, input: "500\n25", expectedOutput: "20", isHidden: true }
    ] 
  },
  { 
    id: "j6", title: "6. Java: Check Even or Odd", difficulty: "Easy", targetLanguage: "java", 
    description: "Read one integer and print 'Even' if it is even, or 'Odd' if it is odd.", examples: "Input:\n4\nOutput:\nEven", 
    testCases: [
      { id: 1, input: "4", expectedOutput: "Even", isHidden: false },
      { id: 2, input: "7", expectedOutput: "Odd", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Even", isHidden: false },
      { id: 4, input: "-4", expectedOutput: "Even", isHidden: true },
      { id: 5, input: "-7", expectedOutput: "Odd", isHidden: true },
      { id: 6, input: "100", expectedOutput: "Even", isHidden: true },
      { id: 7, input: "101", expectedOutput: "Odd", isHidden: true },
      { id: 8, input: "-1", expectedOutput: "Odd", isHidden: true },
      { id: 9, input: "999999", expectedOutput: "Odd", isHidden: true },
      { id: 10, input: "1000000", expectedOutput: "Even", isHidden: true },
      { id: 11, input: "2", expectedOutput: "Even", isHidden: true }
    ] 
  },
  { 
    id: "j7", title: "7. Java: Find Maximum of Two Numbers", difficulty: "Easy", targetLanguage: "java", 
    description: "Read two integers on separate lines and print the larger of the two. If they are equal, print that number.", examples: "Input:\n3\n7\nOutput:\n7", 
    testCases: [
      { id: 1, input: "3\n7", expectedOutput: "7", isHidden: false },
      { id: 2, input: "10\n2", expectedOutput: "10", isHidden: false },
      { id: 3, input: "5\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "-3\n-7", expectedOutput: "-3", isHidden: true },
      { id: 5, input: "0\n-1", expectedOutput: "0", isHidden: true },
      { id: 6, input: "100\n99", expectedOutput: "100", isHidden: true },
      { id: 7, input: "-50\n50", expectedOutput: "50", isHidden: true },
      { id: 8, input: "1000\n1000", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "-1", isHidden: true },
      { id: 10, input: "42\n7", expectedOutput: "42", isHidden: true },
      { id: 11, input: "8\n9", expectedOutput: "9", isHidden: true }
    ] 
  },
  { 
    id: "j8", title: "8. Java: Factorial of a Number", difficulty: "Medium", targetLanguage: "java", 
    description: "Read an integer n (0 <= n <= 12) and print n! (n factorial).", examples: "Input:\n0\nOutput:\n1", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "1", isHidden: false },
      { id: 2, input: "5", expectedOutput: "120", isHidden: false },
      { id: 3, input: "3", expectedOutput: "6", isHidden: false },
      { id: 4, input: "1", expectedOutput: "1", isHidden: true },
      { id: 5, input: "2", expectedOutput: "2", isHidden: true },
      { id: 6, input: "4", expectedOutput: "24", isHidden: true },
      { id: 7, input: "6", expectedOutput: "720", isHidden: true },
      { id: 8, input: "7", expectedOutput: "5040", isHidden: true },
      { id: 9, input: "8", expectedOutput: "40320", isHidden: true },
      { id: 10, input: "10", expectedOutput: "3628800", isHidden: true },
      { id: 11, input: "12", expectedOutput: "479001600", isHidden: true }
    ] 
  },
  { 
    id: "j9", title: "9. Java: Sum of Digits", difficulty: "Easy", targetLanguage: "java", 
    description: "Read a non-negative integer and print the sum of its digits.", examples: "Input:\n123\nOutput:\n6", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "6", isHidden: false },
      { id: 2, input: "9", expectedOutput: "9", isHidden: false },
      { id: 3, input: "1000", expectedOutput: "1", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "555", expectedOutput: "15", isHidden: true },
      { id: 6, input: "999999", expectedOutput: "54", isHidden: true },
      { id: 7, input: "10", expectedOutput: "1", isHidden: true },
      { id: 8, input: "48", expectedOutput: "12", isHidden: true },
      { id: 9, input: "100000", expectedOutput: "1", isHidden: true },
      { id: 10, input: "87654321", expectedOutput: "36", isHidden: true },
      { id: 11, input: "11111", expectedOutput: "5", isHidden: true }
    ] 
  },
  { 
    id: "j10", title: "10. Java: Reverse a Number", difficulty: "Medium", targetLanguage: "java", 
    description: "Read a non-negative integer and print it with its digits reversed. Leading zeros produced by the reversal should be dropped (print the result as a normal integer).", examples: "Input:\n123\nOutput:\n321", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "321", isHidden: false },
      { id: 2, input: "100", expectedOutput: "1", isHidden: false },
      { id: 3, input: "7", expectedOutput: "7", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "900", expectedOutput: "9", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "54321", isHidden: true },
      { id: 7, input: "1000000", expectedOutput: "1", isHidden: true },
      { id: 8, input: "4321", expectedOutput: "1234", isHidden: true },
      { id: 9, input: "10", expectedOutput: "1", isHidden: true },
      { id: 10, input: "555", expectedOutput: "555", isHidden: true },
      { id: 11, input: "908", expectedOutput: "809", isHidden: true }
    ] 
  },
  { 
    id: "j11", title: "11. Java: Check Palindrome Number", difficulty: "Medium", targetLanguage: "java", 
    description: "Read a non-negative integer and print 'Yes' if its digits form a palindrome (read the same forwards and backwards), or 'No' otherwise.", examples: "Input:\n121\nOutput:\nYes", 
    testCases: [
      { id: 1, input: "121", expectedOutput: "Yes", isHidden: false },
      { id: 2, input: "123", expectedOutput: "No", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Yes", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Yes", isHidden: true },
      { id: 5, input: "12321", expectedOutput: "Yes", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "No", isHidden: true },
      { id: 7, input: "11", expectedOutput: "Yes", isHidden: true },
      { id: 8, input: "100", expectedOutput: "No", isHidden: true },
      { id: 9, input: "7887", expectedOutput: "Yes", isHidden: true },
      { id: 10, input: "999999", expectedOutput: "Yes", isHidden: true },
      { id: 11, input: "10", expectedOutput: "No", isHidden: true }
    ] 
  },
  { 
    id: "j12", title: "12. Java: Nth Fibonacci Number", difficulty: "Medium", targetLanguage: "java", 
    description: "Read an integer n (0 <= n <= 30) and print the nth Fibonacci number, where fib(0) = 0, fib(1) = 1, and fib(k) = fib(k-1) + fib(k-2) for k >= 2.", examples: "Input:\n0\nOutput:\n0", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "0", isHidden: false },
      { id: 2, input: "1", expectedOutput: "1", isHidden: false },
      { id: 3, input: "5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "2", expectedOutput: "1", isHidden: true },
      { id: 5, input: "10", expectedOutput: "55", isHidden: true },
      { id: 6, input: "15", expectedOutput: "610", isHidden: true },
      { id: 7, input: "20", expectedOutput: "6765", isHidden: true },
      { id: 8, input: "25", expectedOutput: "75025", isHidden: true },
      { id: 9, input: "30", expectedOutput: "832040", isHidden: true },
      { id: 10, input: "7", expectedOutput: "13", isHidden: true },
      { id: 11, input: "12", expectedOutput: "144", isHidden: true }
    ] 
  },
  { 
    id: "j13", title: "13. Java: Check Prime Number", difficulty: "Medium", targetLanguage: "java", 
    description: "Read an integer n and print 'Prime' if n is a prime number, or 'Not Prime' otherwise (numbers less than 2 are not prime).", examples: "Input:\n7\nOutput:\nPrime", 
    testCases: [
      { id: 1, input: "7", expectedOutput: "Prime", isHidden: false },
      { id: 2, input: "10", expectedOutput: "Not Prime", isHidden: false },
      { id: 3, input: "2", expectedOutput: "Prime", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Not Prime", isHidden: true },
      { id: 5, input: "0", expectedOutput: "Not Prime", isHidden: true },
      { id: 6, input: "-5", expectedOutput: "Not Prime", isHidden: true },
      { id: 7, input: "17", expectedOutput: "Prime", isHidden: true },
      { id: 8, input: "97", expectedOutput: "Prime", isHidden: true },
      { id: 9, input: "100", expectedOutput: "Not Prime", isHidden: true },
      { id: 10, input: "29", expectedOutput: "Prime", isHidden: true },
      { id: 11, input: "91", expectedOutput: "Not Prime", isHidden: true }
    ] 
  },
  { 
    id: "j14", title: "14. Java: Sum of Array Elements", difficulty: "Medium", targetLanguage: "java", 
    description: "Read an integer n (n can be 0), followed by n integers each on its own line, and print the sum of the n integers. If n is 0, print 0.", examples: "Input:\n3\n1\n2\n3\nOutput:\n6", 
    testCases: [
      { id: 1, input: "3\n1\n2\n3", expectedOutput: "6", isHidden: false },
      { id: 2, input: "4\n10\n20\n30\n40", expectedOutput: "100", isHidden: false },
      { id: 3, input: "1\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "5\n1\n1\n1\n1\n1", expectedOutput: "5", isHidden: true },
      { id: 5, input: "2\n-5\n5", expectedOutput: "0", isHidden: true },
      { id: 6, input: "6\n10\n-10\n20\n-20\n30\n-30", expectedOutput: "0", isHidden: true },
      { id: 7, input: "0", expectedOutput: "0", isHidden: true },
      { id: 8, input: "3\n100\n200\n300", expectedOutput: "600", isHidden: true },
      { id: 9, input: "4\n-1\n-2\n-3\n-4", expectedOutput: "-10", isHidden: true },
      { id: 10, input: "5\n7\n7\n7\n7\n7", expectedOutput: "35", isHidden: true },
      { id: 11, input: "3\n1000\n2000\n3000", expectedOutput: "6000", isHidden: true }
    ] 
  },
  { 
    id: "j15", title: "15. Java: Count Vowels in a String", difficulty: "Medium", targetLanguage: "java", 
    description: "Read a line of text and print the number of vowels (a, e, i, o, u, case-insensitive) it contains.", examples: "Input:\nhello\nOutput:\n2", 
    testCases: [
      { id: 1, input: "hello", expectedOutput: "2", isHidden: false },
      { id: 2, input: "Programming", expectedOutput: "3", isHidden: false },
      { id: 3, input: "xyz", expectedOutput: "0", isHidden: false },
      { id: 4, input: "AEIOU", expectedOutput: "5", isHidden: true },
      { id: 5, input: "The Quick Brown Fox", expectedOutput: "5", isHidden: true },
      { id: 6, input: "bcdfg", expectedOutput: "0", isHidden: true },
      { id: 7, input: "aaaaa", expectedOutput: "5", isHidden: true },
      { id: 8, input: "Hello World", expectedOutput: "3", isHidden: true },
      { id: 9, input: "Vowels", expectedOutput: "2", isHidden: true },
      { id: 10, input: "", expectedOutput: "0", isHidden: true },
      { id: 11, input: "Supercalifragilisticexpialidocious", expectedOutput: "16", isHidden: true }
    ] 
  },
];

const javascriptQuestions = [
  { 
    id: "js1", title: "1. JS: Hello World", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Print 'Hello JS' to standard output.", examples: "Output:\nHello JS", 
    testCases: [
      { id: 1, input: "", expectedOutput: "Hello JS", isHidden: false },
      { id: 2, input: "", expectedOutput: "Hello JS", isHidden: false },
      { id: 3, input: "", expectedOutput: "Hello JS", isHidden: false },
      { id: 4, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 5, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 6, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 7, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 8, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 9, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 10, input: "", expectedOutput: "Hello JS", isHidden: true },
      { id: 11, input: "", expectedOutput: "Hello JS", isHidden: true }
    ] 
  },
  { 
    id: "js2", title: "2. JS: Add Two Numbers", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read two integers on separate lines and print their sum.", examples: "Input:\n2\n3\nOutput:\n5", 
    testCases: [
      { id: 1, input: "2\n3", expectedOutput: "5", isHidden: false },
      { id: 2, input: "10\n20", expectedOutput: "30", isHidden: false },
      { id: 3, input: "7\n7", expectedOutput: "14", isHidden: false },
      { id: 4, input: "-5\n10", expectedOutput: "5", isHidden: true },
      { id: 5, input: "100\n200", expectedOutput: "300", isHidden: true },
      { id: 6, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 7, input: "-1\n-1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "999\n1", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "123456\n654321", expectedOutput: "777777", isHidden: true },
      { id: 10, input: "-100\n50", expectedOutput: "-50", isHidden: true },
      { id: 11, input: "1000000\n2000000", expectedOutput: "3000000", isHidden: true }
    ] 
  },
  { 
    id: "js3", title: "3. JS: Subtract Two Numbers", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read two integers on separate lines and print the result of subtracting the second from the first (a - b).", examples: "Input:\n10\n4\nOutput:\n6", 
    testCases: [
      { id: 1, input: "10\n4", expectedOutput: "6", isHidden: false },
      { id: 2, input: "20\n5", expectedOutput: "15", isHidden: false },
      { id: 3, input: "0\n5", expectedOutput: "-5", isHidden: false },
      { id: 4, input: "5\n5", expectedOutput: "0", isHidden: true },
      { id: 5, input: "-5\n-10", expectedOutput: "5", isHidden: true },
      { id: 6, input: "100\n50", expectedOutput: "50", isHidden: true },
      { id: 7, input: "-1\n1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 9, input: "1000\n1", expectedOutput: "999", isHidden: true },
      { id: 10, input: "-100\n-100", expectedOutput: "0", isHidden: true },
      { id: 11, input: "7\n20", expectedOutput: "-13", isHidden: true }
    ] 
  },
  { 
    id: "js4", title: "4. JS: Multiply Two Numbers", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read two integers on separate lines and print their product.", examples: "Input:\n3\n4\nOutput:\n12", 
    testCases: [
      { id: 1, input: "3\n4", expectedOutput: "12", isHidden: false },
      { id: 2, input: "5\n6", expectedOutput: "30", isHidden: false },
      { id: 3, input: "0\n10", expectedOutput: "0", isHidden: false },
      { id: 4, input: "-3\n4", expectedOutput: "-12", isHidden: true },
      { id: 5, input: "-3\n-4", expectedOutput: "12", isHidden: true },
      { id: 6, input: "7\n8", expectedOutput: "56", isHidden: true },
      { id: 7, input: "10\n10", expectedOutput: "100", isHidden: true },
      { id: 8, input: "1\n999", expectedOutput: "999", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "1", isHidden: true },
      { id: 10, input: "12\n12", expectedOutput: "144", isHidden: true },
      { id: 11, input: "100\n100", expectedOutput: "10000", isHidden: true }
    ] 
  },
  { 
    id: "js5", title: "5. JS: Divide Two Numbers", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read two non-negative integers a and b on separate lines (b is not zero, and a is always exactly divisible by b) and print the integer quotient a / b.", examples: "Input:\n10\n2\nOutput:\n5", 
    testCases: [
      { id: 1, input: "10\n2", expectedOutput: "5", isHidden: false },
      { id: 2, input: "20\n4", expectedOutput: "5", isHidden: false },
      { id: 3, input: "9\n3", expectedOutput: "3", isHidden: false },
      { id: 4, input: "100\n10", expectedOutput: "10", isHidden: true },
      { id: 5, input: "81\n9", expectedOutput: "9", isHidden: true },
      { id: 6, input: "144\n12", expectedOutput: "12", isHidden: true },
      { id: 7, input: "0\n5", expectedOutput: "0", isHidden: true },
      { id: 8, input: "1000\n100", expectedOutput: "10", isHidden: true },
      { id: 9, input: "49\n7", expectedOutput: "7", isHidden: true },
      { id: 10, input: "256\n16", expectedOutput: "16", isHidden: true },
      { id: 11, input: "500\n25", expectedOutput: "20", isHidden: true }
    ] 
  },
  { 
    id: "js6", title: "6. JS: Check Even or Odd", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read one integer and print 'Even' if it is even, or 'Odd' if it is odd.", examples: "Input:\n4\nOutput:\nEven", 
    testCases: [
      { id: 1, input: "4", expectedOutput: "Even", isHidden: false },
      { id: 2, input: "7", expectedOutput: "Odd", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Even", isHidden: false },
      { id: 4, input: "-4", expectedOutput: "Even", isHidden: true },
      { id: 5, input: "-7", expectedOutput: "Odd", isHidden: true },
      { id: 6, input: "100", expectedOutput: "Even", isHidden: true },
      { id: 7, input: "101", expectedOutput: "Odd", isHidden: true },
      { id: 8, input: "-1", expectedOutput: "Odd", isHidden: true },
      { id: 9, input: "999999", expectedOutput: "Odd", isHidden: true },
      { id: 10, input: "1000000", expectedOutput: "Even", isHidden: true },
      { id: 11, input: "2", expectedOutput: "Even", isHidden: true }
    ] 
  },
  { 
    id: "js7", title: "7. JS: Find Maximum of Two Numbers", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read two integers on separate lines and print the larger of the two. If they are equal, print that number.", examples: "Input:\n3\n7\nOutput:\n7", 
    testCases: [
      { id: 1, input: "3\n7", expectedOutput: "7", isHidden: false },
      { id: 2, input: "10\n2", expectedOutput: "10", isHidden: false },
      { id: 3, input: "5\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "-3\n-7", expectedOutput: "-3", isHidden: true },
      { id: 5, input: "0\n-1", expectedOutput: "0", isHidden: true },
      { id: 6, input: "100\n99", expectedOutput: "100", isHidden: true },
      { id: 7, input: "-50\n50", expectedOutput: "50", isHidden: true },
      { id: 8, input: "1000\n1000", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "-1", isHidden: true },
      { id: 10, input: "42\n7", expectedOutput: "42", isHidden: true },
      { id: 11, input: "8\n9", expectedOutput: "9", isHidden: true }
    ] 
  },
  { 
    id: "js8", title: "8. JS: Factorial of a Number", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read an integer n (0 <= n <= 12) and print n! (n factorial).", examples: "Input:\n0\nOutput:\n1", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "1", isHidden: false },
      { id: 2, input: "5", expectedOutput: "120", isHidden: false },
      { id: 3, input: "3", expectedOutput: "6", isHidden: false },
      { id: 4, input: "1", expectedOutput: "1", isHidden: true },
      { id: 5, input: "2", expectedOutput: "2", isHidden: true },
      { id: 6, input: "4", expectedOutput: "24", isHidden: true },
      { id: 7, input: "6", expectedOutput: "720", isHidden: true },
      { id: 8, input: "7", expectedOutput: "5040", isHidden: true },
      { id: 9, input: "8", expectedOutput: "40320", isHidden: true },
      { id: 10, input: "10", expectedOutput: "3628800", isHidden: true },
      { id: 11, input: "12", expectedOutput: "479001600", isHidden: true }
    ] 
  },
  { 
    id: "js9", title: "9. JS: Sum of Digits", difficulty: "Easy", targetLanguage: "javascript", 
    description: "Read a non-negative integer and print the sum of its digits.", examples: "Input:\n123\nOutput:\n6", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "6", isHidden: false },
      { id: 2, input: "9", expectedOutput: "9", isHidden: false },
      { id: 3, input: "1000", expectedOutput: "1", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "555", expectedOutput: "15", isHidden: true },
      { id: 6, input: "999999", expectedOutput: "54", isHidden: true },
      { id: 7, input: "10", expectedOutput: "1", isHidden: true },
      { id: 8, input: "48", expectedOutput: "12", isHidden: true },
      { id: 9, input: "100000", expectedOutput: "1", isHidden: true },
      { id: 10, input: "87654321", expectedOutput: "36", isHidden: true },
      { id: 11, input: "11111", expectedOutput: "5", isHidden: true }
    ] 
  },
  { 
    id: "js10", title: "10. JS: Reverse a Number", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read a non-negative integer and print it with its digits reversed. Leading zeros produced by the reversal should be dropped (print the result as a normal integer).", examples: "Input:\n123\nOutput:\n321", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "321", isHidden: false },
      { id: 2, input: "100", expectedOutput: "1", isHidden: false },
      { id: 3, input: "7", expectedOutput: "7", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "900", expectedOutput: "9", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "54321", isHidden: true },
      { id: 7, input: "1000000", expectedOutput: "1", isHidden: true },
      { id: 8, input: "4321", expectedOutput: "1234", isHidden: true },
      { id: 9, input: "10", expectedOutput: "1", isHidden: true },
      { id: 10, input: "555", expectedOutput: "555", isHidden: true },
      { id: 11, input: "908", expectedOutput: "809", isHidden: true }
    ] 
  },
  { 
    id: "js11", title: "11. JS: Check Palindrome Number", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read a non-negative integer and print 'Yes' if its digits form a palindrome (read the same forwards and backwards), or 'No' otherwise.", examples: "Input:\n121\nOutput:\nYes", 
    testCases: [
      { id: 1, input: "121", expectedOutput: "Yes", isHidden: false },
      { id: 2, input: "123", expectedOutput: "No", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Yes", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Yes", isHidden: true },
      { id: 5, input: "12321", expectedOutput: "Yes", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "No", isHidden: true },
      { id: 7, input: "11", expectedOutput: "Yes", isHidden: true },
      { id: 8, input: "100", expectedOutput: "No", isHidden: true },
      { id: 9, input: "7887", expectedOutput: "Yes", isHidden: true },
      { id: 10, input: "999999", expectedOutput: "Yes", isHidden: true },
      { id: 11, input: "10", expectedOutput: "No", isHidden: true }
    ] 
  },
  { 
    id: "js12", title: "12. JS: Nth Fibonacci Number", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read an integer n (0 <= n <= 30) and print the nth Fibonacci number, where fib(0) = 0, fib(1) = 1, and fib(k) = fib(k-1) + fib(k-2) for k >= 2.", examples: "Input:\n0\nOutput:\n0", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "0", isHidden: false },
      { id: 2, input: "1", expectedOutput: "1", isHidden: false },
      { id: 3, input: "5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "2", expectedOutput: "1", isHidden: true },
      { id: 5, input: "10", expectedOutput: "55", isHidden: true },
      { id: 6, input: "15", expectedOutput: "610", isHidden: true },
      { id: 7, input: "20", expectedOutput: "6765", isHidden: true },
      { id: 8, input: "25", expectedOutput: "75025", isHidden: true },
      { id: 9, input: "30", expectedOutput: "832040", isHidden: true },
      { id: 10, input: "7", expectedOutput: "13", isHidden: true },
      { id: 11, input: "12", expectedOutput: "144", isHidden: true }
    ] 
  },
  { 
    id: "js13", title: "13. JS: Check Prime Number", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read an integer n and print 'Prime' if n is a prime number, or 'Not Prime' otherwise (numbers less than 2 are not prime).", examples: "Input:\n7\nOutput:\nPrime", 
    testCases: [
      { id: 1, input: "7", expectedOutput: "Prime", isHidden: false },
      { id: 2, input: "10", expectedOutput: "Not Prime", isHidden: false },
      { id: 3, input: "2", expectedOutput: "Prime", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Not Prime", isHidden: true },
      { id: 5, input: "0", expectedOutput: "Not Prime", isHidden: true },
      { id: 6, input: "-5", expectedOutput: "Not Prime", isHidden: true },
      { id: 7, input: "17", expectedOutput: "Prime", isHidden: true },
      { id: 8, input: "97", expectedOutput: "Prime", isHidden: true },
      { id: 9, input: "100", expectedOutput: "Not Prime", isHidden: true },
      { id: 10, input: "29", expectedOutput: "Prime", isHidden: true },
      { id: 11, input: "91", expectedOutput: "Not Prime", isHidden: true }
    ] 
  },
  { 
    id: "js14", title: "14. JS: Sum of Array Elements", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read an integer n (n can be 0), followed by n integers each on its own line, and print the sum of the n integers. If n is 0, print 0.", examples: "Input:\n3\n1\n2\n3\nOutput:\n6", 
    testCases: [
      { id: 1, input: "3\n1\n2\n3", expectedOutput: "6", isHidden: false },
      { id: 2, input: "4\n10\n20\n30\n40", expectedOutput: "100", isHidden: false },
      { id: 3, input: "1\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "5\n1\n1\n1\n1\n1", expectedOutput: "5", isHidden: true },
      { id: 5, input: "2\n-5\n5", expectedOutput: "0", isHidden: true },
      { id: 6, input: "6\n10\n-10\n20\n-20\n30\n-30", expectedOutput: "0", isHidden: true },
      { id: 7, input: "0", expectedOutput: "0", isHidden: true },
      { id: 8, input: "3\n100\n200\n300", expectedOutput: "600", isHidden: true },
      { id: 9, input: "4\n-1\n-2\n-3\n-4", expectedOutput: "-10", isHidden: true },
      { id: 10, input: "5\n7\n7\n7\n7\n7", expectedOutput: "35", isHidden: true },
      { id: 11, input: "3\n1000\n2000\n3000", expectedOutput: "6000", isHidden: true }
    ] 
  },
  { 
    id: "js15", title: "15. JS: Count Vowels in a String", difficulty: "Medium", targetLanguage: "javascript", 
    description: "Read a line of text and print the number of vowels (a, e, i, o, u, case-insensitive) it contains.", examples: "Input:\nhello\nOutput:\n2", 
    testCases: [
      { id: 1, input: "hello", expectedOutput: "2", isHidden: false },
      { id: 2, input: "Programming", expectedOutput: "3", isHidden: false },
      { id: 3, input: "xyz", expectedOutput: "0", isHidden: false },
      { id: 4, input: "AEIOU", expectedOutput: "5", isHidden: true },
      { id: 5, input: "The Quick Brown Fox", expectedOutput: "5", isHidden: true },
      { id: 6, input: "bcdfg", expectedOutput: "0", isHidden: true },
      { id: 7, input: "aaaaa", expectedOutput: "5", isHidden: true },
      { id: 8, input: "Hello World", expectedOutput: "3", isHidden: true },
      { id: 9, input: "Vowels", expectedOutput: "2", isHidden: true },
      { id: 10, input: "", expectedOutput: "0", isHidden: true },
      { id: 11, input: "Supercalifragilisticexpialidocious", expectedOutput: "16", isHidden: true }
    ] 
  },
];

const cppQuestions = [
  { 
    id: "c1", title: "1. C++: Hello World", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Print 'Hello C++' to standard output.", examples: "Output:\nHello C++", 
    testCases: [
      { id: 1, input: "", expectedOutput: "Hello C++", isHidden: false },
      { id: 2, input: "", expectedOutput: "Hello C++", isHidden: false },
      { id: 3, input: "", expectedOutput: "Hello C++", isHidden: false },
      { id: 4, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 5, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 6, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 7, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 8, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 9, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 10, input: "", expectedOutput: "Hello C++", isHidden: true },
      { id: 11, input: "", expectedOutput: "Hello C++", isHidden: true }
    ] 
  },
  { 
    id: "c2", title: "2. C++: Add Two Numbers", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read two integers on separate lines and print their sum.", examples: "Input:\n2\n3\nOutput:\n5", 
    testCases: [
      { id: 1, input: "2\n3", expectedOutput: "5", isHidden: false },
      { id: 2, input: "10\n20", expectedOutput: "30", isHidden: false },
      { id: 3, input: "7\n7", expectedOutput: "14", isHidden: false },
      { id: 4, input: "-5\n10", expectedOutput: "5", isHidden: true },
      { id: 5, input: "100\n200", expectedOutput: "300", isHidden: true },
      { id: 6, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 7, input: "-1\n-1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "999\n1", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "123456\n654321", expectedOutput: "777777", isHidden: true },
      { id: 10, input: "-100\n50", expectedOutput: "-50", isHidden: true },
      { id: 11, input: "1000000\n2000000", expectedOutput: "3000000", isHidden: true }
    ] 
  },
  { 
    id: "c3", title: "3. C++: Subtract Two Numbers", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read two integers on separate lines and print the result of subtracting the second from the first (a - b).", examples: "Input:\n10\n4\nOutput:\n6", 
    testCases: [
      { id: 1, input: "10\n4", expectedOutput: "6", isHidden: false },
      { id: 2, input: "20\n5", expectedOutput: "15", isHidden: false },
      { id: 3, input: "0\n5", expectedOutput: "-5", isHidden: false },
      { id: 4, input: "5\n5", expectedOutput: "0", isHidden: true },
      { id: 5, input: "-5\n-10", expectedOutput: "5", isHidden: true },
      { id: 6, input: "100\n50", expectedOutput: "50", isHidden: true },
      { id: 7, input: "-1\n1", expectedOutput: "-2", isHidden: true },
      { id: 8, input: "0\n0", expectedOutput: "0", isHidden: true },
      { id: 9, input: "1000\n1", expectedOutput: "999", isHidden: true },
      { id: 10, input: "-100\n-100", expectedOutput: "0", isHidden: true },
      { id: 11, input: "7\n20", expectedOutput: "-13", isHidden: true }
    ] 
  },
  { 
    id: "c4", title: "4. C++: Multiply Two Numbers", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read two integers on separate lines and print their product.", examples: "Input:\n3\n4\nOutput:\n12", 
    testCases: [
      { id: 1, input: "3\n4", expectedOutput: "12", isHidden: false },
      { id: 2, input: "5\n6", expectedOutput: "30", isHidden: false },
      { id: 3, input: "0\n10", expectedOutput: "0", isHidden: false },
      { id: 4, input: "-3\n4", expectedOutput: "-12", isHidden: true },
      { id: 5, input: "-3\n-4", expectedOutput: "12", isHidden: true },
      { id: 6, input: "7\n8", expectedOutput: "56", isHidden: true },
      { id: 7, input: "10\n10", expectedOutput: "100", isHidden: true },
      { id: 8, input: "1\n999", expectedOutput: "999", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "1", isHidden: true },
      { id: 10, input: "12\n12", expectedOutput: "144", isHidden: true },
      { id: 11, input: "100\n100", expectedOutput: "10000", isHidden: true }
    ] 
  },
  { 
    id: "c5", title: "5. C++: Divide Two Numbers", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read two non-negative integers a and b on separate lines (b is not zero, and a is always exactly divisible by b) and print the integer quotient a / b.", examples: "Input:\n10\n2\nOutput:\n5", 
    testCases: [
      { id: 1, input: "10\n2", expectedOutput: "5", isHidden: false },
      { id: 2, input: "20\n4", expectedOutput: "5", isHidden: false },
      { id: 3, input: "9\n3", expectedOutput: "3", isHidden: false },
      { id: 4, input: "100\n10", expectedOutput: "10", isHidden: true },
      { id: 5, input: "81\n9", expectedOutput: "9", isHidden: true },
      { id: 6, input: "144\n12", expectedOutput: "12", isHidden: true },
      { id: 7, input: "0\n5", expectedOutput: "0", isHidden: true },
      { id: 8, input: "1000\n100", expectedOutput: "10", isHidden: true },
      { id: 9, input: "49\n7", expectedOutput: "7", isHidden: true },
      { id: 10, input: "256\n16", expectedOutput: "16", isHidden: true },
      { id: 11, input: "500\n25", expectedOutput: "20", isHidden: true }
    ] 
  },
  { 
    id: "c6", title: "6. C++: Check Even or Odd", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read one integer and print 'Even' if it is even, or 'Odd' if it is odd.", examples: "Input:\n4\nOutput:\nEven", 
    testCases: [
      { id: 1, input: "4", expectedOutput: "Even", isHidden: false },
      { id: 2, input: "7", expectedOutput: "Odd", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Even", isHidden: false },
      { id: 4, input: "-4", expectedOutput: "Even", isHidden: true },
      { id: 5, input: "-7", expectedOutput: "Odd", isHidden: true },
      { id: 6, input: "100", expectedOutput: "Even", isHidden: true },
      { id: 7, input: "101", expectedOutput: "Odd", isHidden: true },
      { id: 8, input: "-1", expectedOutput: "Odd", isHidden: true },
      { id: 9, input: "999999", expectedOutput: "Odd", isHidden: true },
      { id: 10, input: "1000000", expectedOutput: "Even", isHidden: true },
      { id: 11, input: "2", expectedOutput: "Even", isHidden: true }
    ] 
  },
  { 
    id: "c7", title: "7. C++: Find Maximum of Two Numbers", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read two integers on separate lines and print the larger of the two. If they are equal, print that number.", examples: "Input:\n3\n7\nOutput:\n7", 
    testCases: [
      { id: 1, input: "3\n7", expectedOutput: "7", isHidden: false },
      { id: 2, input: "10\n2", expectedOutput: "10", isHidden: false },
      { id: 3, input: "5\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "-3\n-7", expectedOutput: "-3", isHidden: true },
      { id: 5, input: "0\n-1", expectedOutput: "0", isHidden: true },
      { id: 6, input: "100\n99", expectedOutput: "100", isHidden: true },
      { id: 7, input: "-50\n50", expectedOutput: "50", isHidden: true },
      { id: 8, input: "1000\n1000", expectedOutput: "1000", isHidden: true },
      { id: 9, input: "-1\n-1", expectedOutput: "-1", isHidden: true },
      { id: 10, input: "42\n7", expectedOutput: "42", isHidden: true },
      { id: 11, input: "8\n9", expectedOutput: "9", isHidden: true }
    ] 
  },
  { 
    id: "c8", title: "8. C++: Factorial of a Number", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read an integer n (0 <= n <= 12) and print n! (n factorial).", examples: "Input:\n0\nOutput:\n1", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "1", isHidden: false },
      { id: 2, input: "5", expectedOutput: "120", isHidden: false },
      { id: 3, input: "3", expectedOutput: "6", isHidden: false },
      { id: 4, input: "1", expectedOutput: "1", isHidden: true },
      { id: 5, input: "2", expectedOutput: "2", isHidden: true },
      { id: 6, input: "4", expectedOutput: "24", isHidden: true },
      { id: 7, input: "6", expectedOutput: "720", isHidden: true },
      { id: 8, input: "7", expectedOutput: "5040", isHidden: true },
      { id: 9, input: "8", expectedOutput: "40320", isHidden: true },
      { id: 10, input: "10", expectedOutput: "3628800", isHidden: true },
      { id: 11, input: "12", expectedOutput: "479001600", isHidden: true }
    ] 
  },
  { 
    id: "c9", title: "9. C++: Sum of Digits", difficulty: "Easy", targetLanguage: "cpp", 
    description: "Read a non-negative integer and print the sum of its digits.", examples: "Input:\n123\nOutput:\n6", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "6", isHidden: false },
      { id: 2, input: "9", expectedOutput: "9", isHidden: false },
      { id: 3, input: "1000", expectedOutput: "1", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "555", expectedOutput: "15", isHidden: true },
      { id: 6, input: "999999", expectedOutput: "54", isHidden: true },
      { id: 7, input: "10", expectedOutput: "1", isHidden: true },
      { id: 8, input: "48", expectedOutput: "12", isHidden: true },
      { id: 9, input: "100000", expectedOutput: "1", isHidden: true },
      { id: 10, input: "87654321", expectedOutput: "36", isHidden: true },
      { id: 11, input: "11111", expectedOutput: "5", isHidden: true }
    ] 
  },
  { 
    id: "c10", title: "10. C++: Reverse a Number", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read a non-negative integer and print it with its digits reversed. Leading zeros produced by the reversal should be dropped (print the result as a normal integer).", examples: "Input:\n123\nOutput:\n321", 
    testCases: [
      { id: 1, input: "123", expectedOutput: "321", isHidden: false },
      { id: 2, input: "100", expectedOutput: "1", isHidden: false },
      { id: 3, input: "7", expectedOutput: "7", isHidden: false },
      { id: 4, input: "0", expectedOutput: "0", isHidden: true },
      { id: 5, input: "900", expectedOutput: "9", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "54321", isHidden: true },
      { id: 7, input: "1000000", expectedOutput: "1", isHidden: true },
      { id: 8, input: "4321", expectedOutput: "1234", isHidden: true },
      { id: 9, input: "10", expectedOutput: "1", isHidden: true },
      { id: 10, input: "555", expectedOutput: "555", isHidden: true },
      { id: 11, input: "908", expectedOutput: "809", isHidden: true }
    ] 
  },
  { 
    id: "c11", title: "11. C++: Check Palindrome Number", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read a non-negative integer and print 'Yes' if its digits form a palindrome (read the same forwards and backwards), or 'No' otherwise.", examples: "Input:\n121\nOutput:\nYes", 
    testCases: [
      { id: 1, input: "121", expectedOutput: "Yes", isHidden: false },
      { id: 2, input: "123", expectedOutput: "No", isHidden: false },
      { id: 3, input: "0", expectedOutput: "Yes", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Yes", isHidden: true },
      { id: 5, input: "12321", expectedOutput: "Yes", isHidden: true },
      { id: 6, input: "12345", expectedOutput: "No", isHidden: true },
      { id: 7, input: "11", expectedOutput: "Yes", isHidden: true },
      { id: 8, input: "100", expectedOutput: "No", isHidden: true },
      { id: 9, input: "7887", expectedOutput: "Yes", isHidden: true },
      { id: 10, input: "999999", expectedOutput: "Yes", isHidden: true },
      { id: 11, input: "10", expectedOutput: "No", isHidden: true }
    ] 
  },
  { 
    id: "c12", title: "12. C++: Nth Fibonacci Number", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read an integer n (0 <= n <= 30) and print the nth Fibonacci number, where fib(0) = 0, fib(1) = 1, and fib(k) = fib(k-1) + fib(k-2) for k >= 2.", examples: "Input:\n0\nOutput:\n0", 
    testCases: [
      { id: 1, input: "0", expectedOutput: "0", isHidden: false },
      { id: 2, input: "1", expectedOutput: "1", isHidden: false },
      { id: 3, input: "5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "2", expectedOutput: "1", isHidden: true },
      { id: 5, input: "10", expectedOutput: "55", isHidden: true },
      { id: 6, input: "15", expectedOutput: "610", isHidden: true },
      { id: 7, input: "20", expectedOutput: "6765", isHidden: true },
      { id: 8, input: "25", expectedOutput: "75025", isHidden: true },
      { id: 9, input: "30", expectedOutput: "832040", isHidden: true },
      { id: 10, input: "7", expectedOutput: "13", isHidden: true },
      { id: 11, input: "12", expectedOutput: "144", isHidden: true }
    ] 
  },
  { 
    id: "c13", title: "13. C++: Check Prime Number", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read an integer n and print 'Prime' if n is a prime number, or 'Not Prime' otherwise (numbers less than 2 are not prime).", examples: "Input:\n7\nOutput:\nPrime", 
    testCases: [
      { id: 1, input: "7", expectedOutput: "Prime", isHidden: false },
      { id: 2, input: "10", expectedOutput: "Not Prime", isHidden: false },
      { id: 3, input: "2", expectedOutput: "Prime", isHidden: false },
      { id: 4, input: "1", expectedOutput: "Not Prime", isHidden: true },
      { id: 5, input: "0", expectedOutput: "Not Prime", isHidden: true },
      { id: 6, input: "-5", expectedOutput: "Not Prime", isHidden: true },
      { id: 7, input: "17", expectedOutput: "Prime", isHidden: true },
      { id: 8, input: "97", expectedOutput: "Prime", isHidden: true },
      { id: 9, input: "100", expectedOutput: "Not Prime", isHidden: true },
      { id: 10, input: "29", expectedOutput: "Prime", isHidden: true },
      { id: 11, input: "91", expectedOutput: "Not Prime", isHidden: true }
    ] 
  },
  { 
    id: "c14", title: "14. C++: Sum of Array Elements", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read an integer n (n can be 0), followed by n integers each on its own line, and print the sum of the n integers. If n is 0, print 0.", examples: "Input:\n3\n1\n2\n3\nOutput:\n6", 
    testCases: [
      { id: 1, input: "3\n1\n2\n3", expectedOutput: "6", isHidden: false },
      { id: 2, input: "4\n10\n20\n30\n40", expectedOutput: "100", isHidden: false },
      { id: 3, input: "1\n5", expectedOutput: "5", isHidden: false },
      { id: 4, input: "5\n1\n1\n1\n1\n1", expectedOutput: "5", isHidden: true },
      { id: 5, input: "2\n-5\n5", expectedOutput: "0", isHidden: true },
      { id: 6, input: "6\n10\n-10\n20\n-20\n30\n-30", expectedOutput: "0", isHidden: true },
      { id: 7, input: "0", expectedOutput: "0", isHidden: true },
      { id: 8, input: "3\n100\n200\n300", expectedOutput: "600", isHidden: true },
      { id: 9, input: "4\n-1\n-2\n-3\n-4", expectedOutput: "-10", isHidden: true },
      { id: 10, input: "5\n7\n7\n7\n7\n7", expectedOutput: "35", isHidden: true },
      { id: 11, input: "3\n1000\n2000\n3000", expectedOutput: "6000", isHidden: true }
    ] 
  },
  { 
    id: "c15", title: "15. C++: Count Vowels in a String", difficulty: "Medium", targetLanguage: "cpp", 
    description: "Read a line of text and print the number of vowels (a, e, i, o, u, case-insensitive) it contains.", examples: "Input:\nhello\nOutput:\n2", 
    testCases: [
      { id: 1, input: "hello", expectedOutput: "2", isHidden: false },
      { id: 2, input: "Programming", expectedOutput: "3", isHidden: false },
      { id: 3, input: "xyz", expectedOutput: "0", isHidden: false },
      { id: 4, input: "AEIOU", expectedOutput: "5", isHidden: true },
      { id: 5, input: "The Quick Brown Fox", expectedOutput: "5", isHidden: true },
      { id: 6, input: "bcdfg", expectedOutput: "0", isHidden: true },
      { id: 7, input: "aaaaa", expectedOutput: "5", isHidden: true },
      { id: 8, input: "Hello World", expectedOutput: "3", isHidden: true },
      { id: 9, input: "Vowels", expectedOutput: "2", isHidden: true },
      { id: 10, input: "", expectedOutput: "0", isHidden: true },
      { id: 11, input: "Supercalifragilisticexpialidocious", expectedOutput: "16", isHidden: true }
    ] 
  },
];

export const allQuestions = [
  ...pythonQuestions,
  ...javaQuestions,
  ...javascriptQuestions,
  ...cppQuestions
];