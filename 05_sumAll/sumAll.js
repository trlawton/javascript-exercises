const sumAll = function(num1, num2) {
    let ans = 0;
    let start;
    let end;
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }
    if (num1 < num2)
    {
        start = num1;
        end = num2;
    }
    else{
        end = num1;
        start = num2;
    }
    for (let i = start; i < (end + 1); i++)
    {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
