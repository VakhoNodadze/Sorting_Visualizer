
interface Array {
  value: number;
}

const swap = (array: number[], leftIndex: number, rightIndex: number) => {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};
const partition = (array: number[], left: number, right: number) => {
  let pivot = array[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
      // return {array, pivot, pivoti: i, pivotj: j, sorting: false};
    }
    while (array[j] > pivot) {
      j--;
      // return {array, pivot, pivoti: i, pivotj: j, sorting: false};
    }
    if (i <= j) {
      swap(array, i, j); //swap two elements
      i++;
      j--;
      // return {array, pivot, pivoti: i, pivotj: j, sorting: false};
    }
  }
  return {array, pivot, pivoti: i, pivotj: j, sorting: true};
};

const QuickSort = (array: number[], left: number, right: number) => {
  if (array.length > 1) {
    const { array: newArray, sorting, pivoti} = partition(array, left, right); //index returned from partition
    if (left < pivoti - 1) { //more elements on the left side of the pivot
      QuickSort(newArray, left, pivoti - 1);
    }
    if (pivoti < right) { //more elements on the right side of the pivot
      QuickSort(newArray, pivoti, right);
    }
  };
  return array;
};

export default QuickSort;