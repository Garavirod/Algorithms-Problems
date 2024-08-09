import copy
""" My approach """
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        idxs = []
        counter_map = {x: t.count(x) for x in set(t)}
        subs = []

        for i,c in enumerate(s):
            if c in counter_map:
                idxs.append(i)

        for i in idxs:
            counter_map_temp = copy.deepcopy(counter_map)
            j = i + 1
            sh = s[i]
            counter_map_temp[s[i]] -= 1
            if counter_map_temp[s[i]] == 0:
                counter_map_temp.pop(s[i])
            
            while j < len(s) and len(counter_map_temp) != 0:
                if s[j] in counter_map_temp:
                    counter_map_temp[s[j]] -= 1
                    if counter_map_temp[s[j]] == 0:
                        counter_map_temp.pop(s[j])
                sh += s[j]
                j += 1
            if len(counter_map_temp) == 0:
                subs.append(sh)

        return "" if len(subs) == 0 else min(subs,key=len)
    

""" Optimal solution """
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        counter, window = {x: t.count(x) for x in set(t)} , {}
        have, need = 0, len(counter)
        res, resLen = [-1,-1], float('infinity')
        l = 0
        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c,0)
            if c in counter and window[c] == counter[c]:
                have += 1
            while have == need:
                if (r - l + 1) < resLen:
                    res = [l,r]
                    resLen = (r-l)+1
                
                window[s[l]] -= 1
                if s[l] in counter and window[s[l]] < counter[s[l]]:
                    have -= 1
                l += 1

        l, r = res

        return s[l:r+1] if resLen != float('infinity') else ""
            
            