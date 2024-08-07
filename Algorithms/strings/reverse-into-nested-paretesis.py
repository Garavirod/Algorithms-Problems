""""
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
"""
def solution(s):
    for i in range(len(s)):
        if s[i] == "(":
            j = i
        if s[i] == ")":
            k = i
            return solution(s[:j] + s[j+1:k][::-1] + s[k+1:])
    return s
            