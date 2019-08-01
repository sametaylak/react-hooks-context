export const fruitState = {
  fruits: {
    all: []
  }
};

export const fruitReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return { all: [...state.all, action.payload] };
    case 'REMOVE_FRUIT':
      return { all: [...state.all.filter(_ => _ !== action.payload)] };
    default:
      return state;
  }
};