export const newTrale = (array) => {
  return [
    {
      array: [...array],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: []
    }
  ];
};

export const addToTrale = (
  trale,
  array,
  sortedIndices = [],
  groupA = [],
  groupB = [],
  groupC = [],
  groupD = []
) => {
  trale.push({
    array: [...array],
    groupA: [...groupA],
    groupB: [...groupB],
    groupC: [...groupC],
    groupD: [...groupD],
    sortedIndices: [...sortedIndices]
  });
};

export const lastSorted = (trale) => {
  return trale[trale.length - 1].sortedIndices;
};

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

export const createKey = (groupA, groupB, groupC, groupD) => {
  return { groupA, groupB, groupC, groupD };
};
