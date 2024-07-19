// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // initialize sum variable
    let sum = 0;

    // for loop to iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // add each array element to the sum 
        sum += arr[i];
    };
    // return the final number
    return sum;
};
