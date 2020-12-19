
interface Array {
  value: number;
}

const swap = (array: Array[], leftIndex: number, rightIndex: number) => {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
};
const partition = (array: Array[], left: number, right: number) => {
  let pivot = array[Math.floor((right + left) / 2)].value, //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (array[i].value < pivot) {
      i++;
      // return {array, pivot, pivoti: i, pivotj: j, sorting: false};
    }
    while (array[j].value > pivot) {
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

export const quickSort = (array: Array[], left: number, right: number) => {
  let index;
  if (array.length > 1) {
    const { array: newArray, sorting, pivoti} = partition(array, left, right); //index returned from partition
    if (left < pivoti - 1) { //more elements on the left side of the pivot
      quickSort(newArray, left, pivoti - 1);
    }
    if (pivoti < right) { //more elements on the right side of the pivot
      quickSort(newArray, pivoti, right);
    }
  };
  return array;
};