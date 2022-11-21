const reverseString = function(word) {
    if (word == "")
    {
        return "";
    }
    let n = word.length;
    let ans = "";
    for (let i = n - 1; i > -1; i++)
    {
        ans += word.charAt(i);
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
