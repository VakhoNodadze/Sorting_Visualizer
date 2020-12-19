import { newTrale, addToTrale, Trale } from '../helpers/utils';

const InsertionSort = (nums: number[]) => {
  // Initial State
  const trale = newTrale(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrale(trale, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrale(trale, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrale(trale, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrale(trale, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrale(trale, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
  addToTrale(trale, nums, [...Array(nums.length).keys()]);
  return trale;
};

export default InsertionSort;