// This is selection sort implementation in javascript

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const selectionSort = (data, ascending=true) => {

    for(let i = 0; i < data.length; i++){
        // track index of min/max item in the array for ascending/descending order sorting 
        let swapIndex = i;

        for(let j = i; j < data.length; j++){

            if(data[swapIndex] > data[j] && ascending){
                swapIndex = j;
            }
            else if(data[swapIndex] < data[j] && !ascending){
                swapIndex = j;
            }
        }

        // swap the swapIndex item with ith item
        let temp = data[i];
        data[i] = data[swapIndex];
        data[swapIndex] = temp;
    }
}

var array = [-10, 10, 4, 0, 5, 9]
selectionSort(array, ascending=false);
console.log(array);