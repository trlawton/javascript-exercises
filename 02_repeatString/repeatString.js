const repeatString = function(word, times) {
    if (times == 0)
    {
        return "";
    }
    else if (times < 0)
    {
        return "ERROR";
    }
    else
    {
        let ans = word;
        while (times > 1)
        {
            ans += word;
            times--;
        }
        return ans;
    }

};

// Do not edit below this line
module.exports = repeatString;
