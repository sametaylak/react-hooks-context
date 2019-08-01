export const vegetableState = {
  vegetables: {
    all: []
  }
};

export const vegetableReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VEGETABLE':
      return { all: [...state.all, action.payload] };
    case 'REMOVE_VEGETABLE':
      return { all: [...state.all.filter(_ => _ !== action.payload)] };
    default:
      return state;
  }
};