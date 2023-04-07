// Shell sort is very similar to insertion sort. 
// Instead of switching value next to the key, we're doing it 'k' places away
// When this gap reaches the end fo the array, the gap is reduced by (half, third, etc) and repeats
// This process repeats until the gap is 1 (insertion sort)
var arr = process.argv.slice(2).map(num => parseFloat(num));

let gap = 1;

// This determines how large our gap will be from the start
while (gap < arr.length / 3){
    gap = gap * 3 + 1;
}

// This outter loop iterates the gap (this one reduces it by a third)
while (gap > 0){
    // This inner loop behaves the same way as an insertion sort, with the gap in mind
    for (let i = gap; i < arr.length; i++){
        const key = arr[i];
        let j = i;
        while (j >= gap && arr[j - gap] > key) {
            arr[j] = arr[j - gap];
            j -= gap;
        }
        arr[j] = key;
    }
    
    gap = Math.floor(gap / 3);
}

console.log(arr);