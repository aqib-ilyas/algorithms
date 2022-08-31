// This is bubble sort implementation in javascript

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const bubbleSort = (data) => {

    for(let i = 0; i < data.length; i++){
        // using this flag to keep track whether array is sorted or not
        // Note: isSorted flag is just an optimization, algorithm will work without it 
        let isSorted = false;

        for(let j = 0; j < data.length - i - 1; j++){
            // compare and swap adjacent items in the data array
            if(data[j] > data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                isSorted = true;
            }
        }

        // no need to further iterate if items are already sorted
        if(!isSorted) break;
    }
}

var array = [-2, -4, 0, 5, 9, 1]
bubbleSort(array);
console.log(array);