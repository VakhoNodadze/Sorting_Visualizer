
export interface Trale {
  sortedIndices: number[];
  array: number[];
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
}

export const newTrale = (array: number[]) => {
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


export const lastSorted = (trale: Trale[] ) => {
  return trale[trale.length - 1].sortedIndices;
};

export const swap = (array: number[], i: number, j: number) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

export const createRange = (start: number, end: number) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

export const createKey = (groupA: string | null, groupB: string | null, groupC: string | null, groupD?: string | null) => {
  return { groupA, groupB, groupC, groupD };
};
