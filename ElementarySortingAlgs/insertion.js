// Insertion sort is done by moving a value towards the front of the array until it's greater (or lesser) than the value in front
var arr = process.argv.slice(2).map(num => parseFloat(num));

console.log(`Initial order: ${arr}`);
console.log();

// Loop through the second element to the last element
// The key is the current index
for (i = 1; i < arr.length; i++) {
    const key = arr[i];
    // The element before the key (This will help move the key into place)
    let j = i - 1;
    //The key moves to the left switches places with the element in front, iff the element in front is less than the key
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
    console.log(`Current key: ${key}    |   After inner loop: ${arr}`);
}
console.log();
console.log(`Insertion sort order: ${arr}`);