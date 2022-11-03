class Solution:
    def isValid(self, s: str) -> bool:
        stack = [];
        hashBracket = {")":"(", "]":"[", "}":"{" };
        
        for bracket in s:
            if bracket in hashBracket:
                if stack and stack[-1] == hashBracket[bracket]:
                    print(hashBracket[bracket])
                    stack.pop()
                else:
                    return False
            else:
                stack.append(bracket)
        
        return True if not stack else False