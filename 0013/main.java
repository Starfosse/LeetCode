class Solution {
    public int romanToInt(String s) {
        HashMap<String, Integer> map = new HashMap<>(Map.of(
            "I", 1,
            "V", 5,
            "X", 10,
            "L", 50,
            "C", 100,
            "D", 500,
            "M", 1000
        ));
        
        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            int current = map.get(String.valueOf(s.charAt(i)));
            int next = i + 1 < s.length() ? map.get(String.valueOf(s.charAt(i + 1))) : 0;

            if (current < next) {
                total -= current;
            } else {
                total += current;
            }
        }
        return total;
    }
}
