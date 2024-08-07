class Solution:
    def isValid(self, s: str) -> bool:
        closures = dict()
        closures["("] = ")"
        closures["["] = "]"
        closures["{"] = "}"
        stack = []

        for i in range(len(s)):
            if s[i] in closures:
                stack.insert(0, s[i])
            else:
                if len(stack) == 0:
                    return False
                if s[i] == closures[stack[0]]:
                    stack.pop(0)
                else:
                    return False          
        return len(stack) == 0
