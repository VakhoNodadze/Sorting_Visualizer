const initialSortObj = {
    iteration: 0,
    innerIteration: 0,
    selectedIteration: 0,
    leastIndex: Number.MAX_VALUE,
    leastValue: Number.MAX_VALUE,
    partitionCompleted: false,
    nextLeftIter: null,
    nextRightIter: null,
    pivoti: null,
    pivotj: null,
    currentPartition: null,
    pivot: null,
    pivots: []
  };
  const initialState = {
    barSizes: Array.from({ length: 10 }, () => Math.floor(Math.random() * 50)),
    sortObj: initialSortObj
  };
const barSizesReducer = (action, state = initialState) => {
    // switch (action.type) {
    //   case 'RESET_BAR_SIZES':
    //     var barSizes = Array.from({ length: action.length }, () => Math.floor(Math.random() * 50));
    //     return {
    //       ...state,
    //       barSizes,
    //       sortObj: initialSortObj
    //     };
    //   case 'SET_BAR_SIZES':
    //     return {
    //       ...state,
    //       barSizes: action.barSizes,
    //       sortObj: action.sortObj
    //     };
    //   default:
    //     return state;
    // }
    return state;
};

export default barSizesReducer;