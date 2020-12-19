
interface Trale {
  sortedIndices: number[];
  array: number[];
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
  sorting: boolean;
}

export const newTrale = (array: Object[]) => {
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
  trale: Trale[],
  array: number[],
  sortedIndices: number[] = [],
  groupA: number[] = [],
  groupB: number[] = [],
  groupC: number[] = [],
  groupD: number[] = [],
  sorting: boolean = true
) => {
  trale.push({
    array: [...array],
    groupA: [...groupA],
    groupB: [...groupB],
    groupC: [...groupC],
    groupD: [...groupD],
    sortedIndices: [...sortedIndices],
    sorting
  });
};


export const lastSorted = (trale: Trale[] ) => {
  return trale[trale.length - 1].sortedIndices;
};

export const swap = (array: number[], i: number, j: number) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// export const createRange = (start: number, end: number) => {
//   return [...Array(end - start).keys()].map((elem) => elem + start);
// };

export const createKey = (groupA: number[], groupB: number[], groupC: number[], groupD: number[]) => {
  return { groupA, groupB, groupC, groupD };
};
