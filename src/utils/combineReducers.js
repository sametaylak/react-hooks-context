const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);

  return function combineReducers(state = {}, action) {
    const nextState = {};
    let hasChanged = false;

    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        throw new Error(
          `You already started drinking? Your reducer for ${key} is returning undefined!`
        );
      }
      nextState[key] = nextStateForKey;
      if (nextStateForKey !== previousStateForKey) {
        hasChanged = true;
      }
    });
    return hasChanged ? nextState : state;
  };
};

export default combineReducers;