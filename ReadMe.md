# Variable

- variables are used to store the data.

- Ex. string, number, boolean, array, objects, ....

- we will declare variables by using "var", "let" and "const" keyword.

- "let" and "const" keyword introduced in ES6.

- variables should contain a-z, A-Z, 0-9, \$ and \_

- variables should not start with digits.

        Ex. var data = value;

## String

- collection of characters called as string.

- declare the string in 3 ways

        1.  "",
        2.  ''(single quotes) and
        3.  ` `(backtick operator)

- (backtick) operator used to define the paragraphs.

## number

- decimal, double, hexadecimal, octal, binary

- hexadecimal number will prefix with "0x".

- octal numbers will prefix with "0o".

- binary numbers will prefix with "0b"

## Boolean

- "true" or "false

====================

# let keyword

- let keyword used to define the variables.

- let keyword introduced in ES6.

- getting the wrong results for var keyword, correct is let keyword.

# difference between var and let keyword.

- var keyword won't allows scope rule , let allows scope rule.

- var keyword breaks the loops functionality.

- let keyword obeys the loops functionality.

- var keyword allows the duplicate variables

- let keyword won't allow duplicate variables.

- var keyword
  { } is called block

- From ES6 keywords onwards using let and const keywords used.

## variable hoisting

- accessing any variables before declaration.

- variable hositing because of "var" keyword.

- we can overcome variable hoisting with "let" keyword.

- getting undefined instead of error called variable hoisting.

---

/\*

### var --------------------------------------------### let

1. ES1 -------------------------------------------------- 1) ES6

2. duplicate variables allowed---------- 2) duplicate variables not allowed

3. won't obey scope rule----------------- 3) obeys scope rule

4. global polluting issue raised----- 4) we can overcome global polluting issue

5. variable hoisting raised ------------5) we can overcome variable hoisting

6. var keyword is the global scope---6. let keyword is the block scoped member
   member

\*/

---

# const keyword

- won't allow re-initialization.

- const keyword introduced in ES6.

- const keyword used to define the variables.

Note: total re-initialization not possible but modification is possible.

Ex. arr[0]="Angular11";
