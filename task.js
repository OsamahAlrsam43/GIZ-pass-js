let numbers = [10, 10, 31, 19, 18, 21, 55, 23, 20, 10, 10, 78, 80, 99, 15];

console.log("Original numbers list: ", numbers);
console.log("===================================");

//Loop to calculate the length of the list
for (let i = 0; i < numbers.length; i++) {
  //This for loop makes comparisons between each element in the list.
  for (let j = 1; j < numbers.length - 1; j++) {
    //This Swap
    // Check if current number is greater than the next number
    if (numbers[j] > numbers[j + 1]) {
      // Store current value to generate swap
      const temp = numbers[j];
      // Now the current position get value of the next position
      numbers[j] = numbers[j + 1];
      // And de next position get value of the current position
      numbers[j + 1] = temp;
    }
  }
}
//Print the sorted array
console.log("numbers list After sorting: ", numbers);
console.log("===================================");

//Loop to calculate the length of the list
for (let i = 0; i < numbers.length; i++) {
  //This for loop makes comparisons between each element in the list.
  for (let j = 1; j < numbers.length + 1; j++) {
    //This Swap
    // Check if current number is greater than the next number
    if (numbers[j] > numbers[j - 1]) {
      // Store current value to generate swap
      const temp = numbers[j];
      // Now the current position get value of the next position
      numbers[j] = numbers[j - 1];
      // And de next position get value of the current position
      numbers[j - 1] = temp;
    }
  }
}
//Print the sorted array
console.log("numbers list After Desc sorting: ", numbers);
console.log("===================================");
