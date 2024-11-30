class Solution {
    public String longestCommonPrefix(String[] strs) {
        int size = Arrays.stream(strs).mapToInt(String::length).min().orElse(0);
        String longestCommon = "";
        for(int i = 0; i < size; i++)
        {
            char currentCharacter = strs[0].charAt(i);
            for(int j = 1; j < strs.length; j++)
            {
                char nextCharacter = strs[j].charAt(i);
                if(nextCharacter != currentCharacter)
                    return longestCommon;
            }
            longestCommon += currentCharacter;
        }
        return longestCommon;
    }
}