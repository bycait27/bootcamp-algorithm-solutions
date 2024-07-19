// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    // for loop iterates through the all nums
    for (let i = 0; i <= num; i++) {
        // if the num is divisible by 2 (even)...
        if (i % 2 === 0) {
            // prints the even num to the console
            console.log(i);
        };
    };
};
