const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for(let i = 0; i < array.length; i++){
        let indexOfSmallest = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexOfSmallest]){
                indexOfSmallest = j;
            }
        }
        const temp = array[i];
        array[i] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
    }
}

selectionSort(numbers);

console.log(numbers);