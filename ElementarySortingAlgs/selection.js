// The Selection sorting algorithm "selects" the minimum value to the right of the key index
// The indexes of the minimum value and key will trade spots, iff the minimum value is less than the key

// Take all numbers from the terminal into an array, starting from the second index
var arr = process.argv.slice(2).map(num => parseFloat(num));

console.log(`Initial order: ${arr}`);
console.log();

// Loop through the first element to the second-to-last element (The last element will be switched at the end, if needed)
for (i = 0; i < arr.length - 1; i++) {
    // Minimal index will start at the key, it will change if a smaller value is found
    let minIndex = i;
    // Loop through indexes to the right of the key
    for (j = i + 1; j < arr.length; j++) {
        //If a smaller value is found, the minimal index is reassigned
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    // Trade places between the key index and the minimal index (Sometimes it's the same index)
    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    
    // Results after each iteration
    console.log(`Iteration ${i + 1}: ${arr}`);
}
console.log();
console.log(`Selection sort order: ${arr}`);
