// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    // if the number is equal to 1...if so, we have reached the end of the countdown
    if (num === 1) { 
        // prints the number 1 to the console
        console.log(num);
        // after printing 1, we stop the function
        return;
    };
    // if the number is not 1, the value of num is printed to the console
    console.log(num);
    // call the function again with the number decremented by 1
    // the function will repeat, each time with a smaller number until it reaches 1
    countdown(num - 1);
};
