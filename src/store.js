import React, { createContext, useReducer, useEffect } from 'react';

import { fruitState, fruitReducer } from './pages/Fruits/store';
import { vegetableState, vegetableReducer } from './pages/Vegetables/store';

import combineReducers from './utils/combineReducers';

export const StoreContext = createContext({});

const initialStates = {
  ...fruitState,
  ...vegetableState
};

const reducers = combineReducers({
  fruits: fruitReducer,
  vegetables: vegetableReducer
});

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducers, JSON.parse(localStorage.getItem('store')) || initialStates);
  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(state));
  });
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store;